import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Loading } from "../Helpers/Loading";
import { useForm } from "react-hook-form";
import { useGetQuiz } from "../../queries/useGetQuiz";
import { useParams } from "react-router-dom";
import { useSteps } from "../../hooks/useSteps";
import { Question } from "./Question";

interface QuestionsProps {
  showAll?: boolean;
}

export const Questions: React.FC<QuestionsProps> = ({ showAll }) => {
  
  const { id } = useParams();
  const { quiz, isLoading } = useGetQuiz(id as string);

  const { control, watch } = useForm<Record<string, string>>({
    defaultValues: quiz?.questions.reduce((prev, question) => {
      return { ...prev, [question.id]: "" };
    }, {}),
  });

  const totalQuestions = quiz?.questions.length as number;

  const {
    nextStep: nextQuestion,
    prevStep: prevQuestion,
    currentStep: currentQuestion,
  } = useSteps({ totalSteps: totalQuestions - 1 });

  const isCurrentQuestionAnswered = !!watch(
    quiz?.questions[currentQuestion].id as string
  );

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
