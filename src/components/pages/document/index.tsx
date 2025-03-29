import FormInput from "@/components/form/input";
import SelectField from "@/components/form/select-field";
import FormTextarea from "@/components/form/textarea";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

type Document = {
  id: string;
  name: string;
  desc: string;
  price: number;
  category: string;
  file: Blob;
};

export default function DocumentCreatePage() {
  const form = useForm<Document>();

  const onSubmit = (values: Document) => {
    console.log("Document created:", values);
  };

  return (
    <div>
      <h2 className="text-xl font-bold my-4">Mahsulot yuklash</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          <FormInput
            required
            label="Fayl"
            methods={form}
            name="file"
            type="file" 
          />
          <FormInput required label="Nomi" methods={form} name="name" />
          <FormInput required label="Narxi" methods={form} name="price" />
          <SelectField
            required
            methods={form}
            label="Kategoriya"
            name="category"
            options={[
              { id: "1", name: "Kategoria 1" },
              { id: "2", name: "Kategoria 2" },
              { id: "3", name: "Kategoria 3" },
            ]}
          />
        </div>
        <FormTextarea
          required
          className="col-span-4 w-full"
          methods={form}
          name="desc"
          label="Izoh"
          placeholder="Izoh..."
        />
        <Button className="float-end cursor-pointer px-6">Saqlash</Button>
      </form>
    </div>
  );
}
