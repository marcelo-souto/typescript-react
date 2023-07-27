import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Loading } from "../../Helpers/Loading";
import { Question } from "../Question";
import { useQuizQuestionsForm } from "./useQuizQuestionsForm";
import { useQuizStore } from "../../../store/store";

interface QuizQuestionsFormProps {
  confirm?: boolean;
}

export const QuizQuestionsForm: React.FC<QuizQuestionsFormProps> = ({
  confirm,
}) => {
  const { checkAnswers } = useQuizStore();

  const {
    isLoading,
    quiz,
    prevQuestion,
    nextQuestion,
    currentQuestion,
    totalQuestions,
    areAllQuestionsAnswered,
    handleSubmit,
  } = useQuizQuestionsForm();

  if (isLoading) return <Loading />;

  return (
    <>
      <Stack justifyContent="center">
        {!confirm && (
          <Typography color="grey.500" mb={1}>
            {currentQuestion + 1}/{totalQuestions}
          </Typography>
        )}

        {!confirm &&
          quiz?.questions.map((question, index) => {
            if (index === currentQuestion)
              return <Question key={question.id} question={question} />;
          })}

        {confirm &&
          quiz?.questions.map((question) => {
            return <Question key={question.id} question={question} />;
          })}

        {!confirm && (
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

            {currentQuestion + 1 < totalQuestions && (
              <Button
                variant="contained"
                disableElevation
                onClick={() => nextQuestion()}
              >
                Proxima
              </Button>
            )}

            {currentQuestion + 1 === totalQuestions && (
              <Button
                variant="contained"
                disableElevation
                disabled={!areAllQuestionsAnswered}
                onClick={() => checkAnswers()}
              >
                Finalizar
              </Button>
            )}
          </Stack>
        )}
      </Stack>
    </>
  );
};
