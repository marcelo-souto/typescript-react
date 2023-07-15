import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { UserLoginProps, userLoginPropsSchema } from "../../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLogin } from "../../../api/api";

export const useLoginForm = () => {

  const mutation = useMutation({ mutationFn: userLogin });
  const { isError, data, error, isSuccess, isLoading } = mutation;

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
    mutation.mutate({ email, password });

  return {
    handleSubmit,
    register,
    errors,
    onSubmit,
    isLoading,
    isError,
    data,
    error,
    isSuccess,
  };
};
