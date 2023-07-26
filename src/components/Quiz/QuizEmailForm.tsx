import { Stack, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { UserEmail, userEmailSchema } from "../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuizAppState } from "../../context/QuizContext";

export const QuizEmailForm = () => {
  const { updateQuizState } = useQuizAppState();

  const { register,formState: { isValid }, getValues } = useForm<UserEmail>({
    mode: "onChange",
    resolver: zodResolver(userEmailSchema),
  });

  const handleClick = () => {
    updateQuizState({ email: getValues("email") });
  };

  return (
    <Stack>
      <TextField {...register("email")} />
      <Button disabled={!isValid} onClick={handleClick}>
        Próximo
      </Button>
    </Stack>
  );
};
