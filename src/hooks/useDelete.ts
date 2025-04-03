import { api } from "@/constants/api";
import { onError } from "@/lib/onError";
import {
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

export const deleteRequest = (url: string, config?: AxiosRequestConfig) =>
  api.delete(`/${url}`, config).then((res) => res.data);

export const useDelete = (
  options?: Partial<UseMutationOptions<any, any, string>>,
  config?: AxiosRequestConfig,
) => {
  return useMutation<any, any, string>({
    mutationFn: (url) => deleteRequest(url, config),
    onError,
    ...(options || {}),
  });
};
