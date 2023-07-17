import { useForm } from "react-hook-form";
import { UserRegisterProps, userRegisterSchema } from "../../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { userRegister } from "../../../api/api";

export const useRegisterForm = () => {
  
  const mutation = useMutation({ mutationFn: userRegister });
  const { isError, data, error, isSuccess, isLoading } = mutation;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserRegisterProps>({
    resolver: zodResolver(userRegisterSchema),
    criteriaMode: "all",
    mode: "all",
  });

  const onSubmit = ({ email, name, password }: UserRegisterProps) =>
    mutation.mutate({ email, name, password });

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    isError,
    data,
    error,
    isSuccess,
    isLoading,
  };
};
