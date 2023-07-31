import { Stack, TextField, Button, Typography } from "@mui/material";
import { useQuizEmailForm } from "./useQuizEmailForm";

export const QuizEmailForm = () => {
  
  const { register, isValid, handleClick } = useQuizEmailForm();

  return (
    <Stack maxWidth={340} spacing={3}>
      <Typography variant="body1">Digite seu email para continuar:</Typography>
      <TextField size="small" label="Email" {...register("email")} />
      <Button
        variant="contained"
        disabled={!isValid}
        onClick={handleClick}
        disableElevation
        sx={{ width: "max-content" }}
      >
        Continuar
      </Button>
    </Stack>
  );
};
