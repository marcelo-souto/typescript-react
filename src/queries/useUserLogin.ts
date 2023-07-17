import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogin } from "../api/api";
import { UserLoginProps } from "../types/types";

export const useUserLogin = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ email, password }: UserLoginProps) =>
      userLogin({ email, password }),

    onSuccess: (data) => {
      queryClient.setQueryData(["token"], data);
      localStorage.setItem("token", data);
    },

    onError: (data) => console.log(data),
  });

  return mutation;
};
