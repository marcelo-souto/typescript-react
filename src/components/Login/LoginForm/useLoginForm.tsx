import { useForm } from "react-hook-form";
import { UserLoginProps, userLoginPropsSchema } from "../../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserLogin } from "../../../queries/useUserLogin";

export const useLoginForm = () => {
  const { mutate, isError, error, isSuccess, isLoading } = useUserLogin();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserLoginProps>({
    resolver: zodResolver(userLoginPropsSchema),
    criteriaMode: "all",
    mode: "all",
  });

  const onSubmit = ({ email, password }: UserLoginProps) =>
    mutate({ email, password });

  return {
    handleSubmit,
    register,
    errors,
    onSubmit,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};
