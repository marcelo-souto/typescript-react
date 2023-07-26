import { useForm } from "react-hook-form";
import { useQuizStore } from "../../../store/store";
import { UserEmail, userEmailSchema } from "../../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";

export const useQuizEmailForm = () => {
  const { setQuizUserEmail } = useQuizStore((state) => state);

  const {
    register,
    getValues,
    formState: { isValid },
  } = useForm<UserEmail>({
    resolver: zodResolver(userEmailSchema),
  });

  const handleClick = () => setQuizUserEmail(getValues("email"));

  return { register, isValid, handleClick };
};
