import { useForm } from "react-hook-form";
import { useQuizStore } from "../../../store/store";
import { UserEmail, userEmailSchema } from "../../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";

export const useQuizEmailForm = () => {

  const { id } = useParams();
  const { setQuizUserEmail, setQuizId } = useQuizStore((state) => state);

  const {
    register,
    getValues,
    formState: { isValid },
  } = useForm<UserEmail>({
    resolver: zodResolver(userEmailSchema),
  });

  const handleClick = () => {
    setQuizId(id as string)
    setQuizUserEmail(getValues("email"));
  };

  return { register, isValid, handleClick };
};
