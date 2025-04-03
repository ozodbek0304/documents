import { useModal } from "@/hooks/use-modal";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Modal from "./modal";
import { useDelete } from "@/hooks/useDelete";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  modalKey?: string;
  path: string;
  id: number | string;
  queryKey: string | string[];
  name?: string;
};

export default function DeleteModal({
  modalKey = "delete",
  path,
  id,
  queryKey,
  name,
}: Props) {
  const { closeModal } = useModal(modalKey);
  const queryClient = useQueryClient();
  const resolvedQueryKey = queryKey
    ? Array.isArray(queryKey)
      ? queryKey
      : [queryKey]
    : [path];
  const { mutate, isPending } = useDelete({
    onSuccess: () => {
      toast.success("Muvaffaqiyatli o'chirildi");
      closeModal();
      queryClient.removeQueries({
        queryKey: resolvedQueryKey,
      });
    },
  });
  const handleDelete = () => {
    mutate(path + `${id}/`);
  };

  return (
    <Modal modalKey={modalKey}>
      <DialogHeader>
        <DialogTitle className="font-normal">
          Siz haqiqatdan ham {name} o'chirishni xohlaysizmi ?
        </DialogTitle>
        <DialogDescription>Bu qaytarib bo'lmas jarayon!!!</DialogDescription>
      </DialogHeader>
      <DialogFooter className="grid grid-cols-2 gap-2">
        <Button variant={"outline"} disabled={isPending} onClick={closeModal}>
          Orqaga
        </Button>
        <Button
          variant={"destructive"}
          onClick={handleDelete}
          loading={isPending}
        >
          O'chirish
        </Button>
      </DialogFooter>
    </Modal>
  );
}
