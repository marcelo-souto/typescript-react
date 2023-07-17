import { useMutation } from "@tanstack/react-query";
import { userRegister } from "../api/api";

export const useUserRegister = () => {

  const { mutate: userRegisterMutation, ...rest } = useMutation({
    mutationFn: userRegister,
  });

  return { userRegisterMutation, ...rest };
};
