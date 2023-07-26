import { Stack, TextField, Button } from "@mui/material";
import { useQuizEmailForm } from "./useQuizEmailForm";

export const QuizEmailForm = () => {
  const { register, isValid, handleClick } = useQuizEmailForm();

  return (
    <Stack>
      <TextField {...register("email")} />
      <Button disabled={!isValid} onClick={handleClick}>
        Próximo
      </Button>
    </Stack>
  );
};
