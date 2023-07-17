import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogin } from "../api/api";
import { UserLoginProps } from "../types/types";

export const useUserLogin = () => {
  const queryClient = useQueryClient();

  const { data: token, ...rest } = useMutation({
    mutationFn: ({ email, password }: UserLoginProps) =>
      userLogin({ email, password }),

    onSuccess: async (data) => {
      queryClient.setQueryData(["token"], data);
      localStorage.setItem("token", data);
      await queryClient.refetchQueries({ queryKey: ["user"] });
    },

    onError: (data) => console.log(data),
  });

  return { token, ...rest };
};
