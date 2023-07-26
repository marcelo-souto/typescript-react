import { useForm } from "react-hook-form";
import { UserRegisterProps, userRegisterSchema } from "../../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserRegister } from "../../../queries/useUserRegister";

export const useRegisterForm = () => {
  const { userRegisterMutation, isError, data, error, isSuccess, isLoading } =
    useUserRegister();

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
    userRegisterMutation({ email, name, password });

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
