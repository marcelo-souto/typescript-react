import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { QuestionSwitcher } from "./QuestionSwitcher";
import { useQuizContext } from "../../context/QuizContext";
import { Loading } from "../Helpers/Loading";

export const Quiz: React.FC = () => {

  const {
    totalQuestions,
    currentQuestion,
    prevQuestion,
    nextQuestion,
    isCurrentQuestionAnswered,
    isLoading
  } = useQuizContext();

  if (isLoading) return <Loading />;

  return (
    <Stack justifyContent="center">

      <Typography color="grey.500" mb={1}>
        {currentQuestion + 1}/{totalQuestions}
      </Typography>

      <QuestionSwitcher />

      <Stack direction="row" justifyContent="space-between" mt={2}>
        <Button
          variant="contained"
          disableElevation
          disabled={currentQuestion === 0}
          onClick={() => prevQuestion()}
          sx={{ ":disabled": { opacity: 0 } }}
        >
          Voltar
        </Button>

        <Button
          variant="contained"
          disableElevation
          disabled={!isCurrentQuestionAnswered}
          onClick={() => nextQuestion(isCurrentQuestionAnswered)}
        >
          Proxima
        </Button>
      </Stack>

    </Stack>
  );
};
