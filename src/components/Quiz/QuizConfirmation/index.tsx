import { Button, Typography, Stack, StackProps } from "@mui/material";
import React from "react";

interface QuizConfirmationProps extends StackProps {
  handleSendQuizAnswers: () => void;
}

export const QuizConfirmation: React.FC<QuizConfirmationProps> = ({
  handleSendQuizAnswers,
  ...props
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      borderRadius={3}
      border="2px solid"
      borderColor="grey.300"
      padding={4}
      zIndex={1}
      {...props}
    >
      <Typography>
        Releia cuidadosamente e confirme suas respostas antes de enviar
      </Typography>
      <Button
        variant="contained"
        disableElevation
        onClick={handleSendQuizAnswers}
      >
        Enviar
      </Button>
    </Stack>
  );
};
