import React from "react";
import { Button, Stack, Typography, Alert, AlertTitle } from "@mui/material";
import { Loading } from "../../Helpers/Loading";
import { useQuizQuestionsForm } from "./useQuizQuestionsForm";
import { Questions } from "../Questions";

export const QuizQuestionsForm: React.FC = () => {
  const [confirmMode, setConfirmMode] = React.useState(false);

  const {
    isLoading,
    quiz,
    prevQuestion,
    nextQuestion,
    currentQuestion,
    totalQuestions,
    areAllQuestionsAnswered,
  } = useQuizQuestionsForm();

  const handleClick = () => {
    if (areAllQuestionsAnswered) setConfirmMode(true);
  };

  if (isLoading) return <Loading />;

  if (quiz)
    return (
      <Stack justifyContent="center">
        {confirmMode && (
          <Stack
            sx={{
              maxWidth: 320,
              borderRadius: 3,
              alignItems: "center",
              position: "fixed",
              right: 24,
              top: 24,
              border: "2px solid",
              borderColor: "grey.300",
              padding: 4
            }}
          >
            <Typography>
              Releia cuidadosamente e confirme suas respostas antes de enviar
            </Typography>
          </Stack>
        )}

        {!confirmMode && (
          <Typography color="grey.500" mb={1}>
            {currentQuestion + 1}/{totalQuestions}
          </Typography>
        )}

        <Questions
          questions={quiz.questions}
          currentQuestion={currentQuestion}
          seeAll={confirmMode}
        />

        {!confirmMode && (
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
                onClick={handleClick}
              >
                Finalizar
              </Button>
            )}
          </Stack>
        )}
      </Stack>
    );

  return null;
};
