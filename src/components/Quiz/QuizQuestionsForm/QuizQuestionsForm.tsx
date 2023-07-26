import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Loading } from "../../Helpers/Loading";
import { Question } from "../Question";
import { useQuizQuestionsForm } from "./useQuizQuestionsForm";

interface QuizQuestionsFormProps {
  showAll?: boolean;
}

export const QuizQuestionsForm: React.FC<QuizQuestionsFormProps> = ({
  showAll,
}) => {
  const {
    isLoading,
    quiz,
    prevQuestion,
    nextQuestion,
    currentQuestion,
    totalQuestions,
    control,
    isCurrentQuestionAnswered,
  } = useQuizQuestionsForm();

  if (isLoading) return <Loading />;

  return (
    <Stack justifyContent="center">
      <Typography color="grey.500" mb={1}>
        {currentQuestion + 1}/{totalQuestions}
      </Typography>

      {!showAll &&
        quiz?.questions.map((question, index) => {
          if (index === currentQuestion)
            return (
              <Question
                key={question.id}
                question={question}
                control={control}
              />
            );
        })}

      {showAll &&
        quiz?.questions.map((question) => {
          return (
            <Question key={question.id} question={question} control={control} />
          );
        })}

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
