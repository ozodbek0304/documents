import { toast } from "sonner";

export function onError(err: any) {
  const arrayErrors = Object.entries(err?.response?.data || {});

  if (arrayErrors.length > 0) {
    // eslint-disable-next-line
    toast.error(arrayErrors.map(([_, value]) => value + "; ").join(', '),)
  } else {
    toast.error(err?.message || err?.detail,)
  }
}
