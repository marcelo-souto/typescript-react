import React from "react";
import { Button, Stack } from "@mui/material";
import { Question } from "./Question";
import { IQuizWithQuestions } from "../../api/api";
import { useForm, FormProvider } from "react-hook-form";
import { useSteps } from "../../hooks/useSteps";
import { QuestionSwitcher } from "./QuestionSwitcher";

interface QuizProps {
  quiz: IQuizWithQuestions;
}

export const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  const { questions } = quiz;

  const { nextStep, prevStep, currentStep } = useSteps({
    totalSteps: questions.length - 1,
  });

  const { control, watch } = useForm<Record<string, string>>({
    defaultValues: questions.reduce((prev, question) => {
      return { ...prev, [question.id]: "" };
    }, {}),
  });

  const canGoNext = !!watch(questions[currentStep].id).length;

  return (
    <Stack>

      <QuestionSwitcher currentQuestion={currentStep}>
        {questions.map((question) => (
          <Question key={question.id} question={question} control={control} />
        ))}
      </QuestionSwitcher>

      <Stack direction="row" justifyContent="space-between">
        
        <Button
          variant="contained"
          disabled={currentStep === 0}
          onClick={() => prevStep()}
          sx={{ ":disabled": { opacity: 0 } }}
        >
          Voltar
        </Button>
        <Button
          variant="contained"
          disabled={!canGoNext}
          onClick={() => nextStep(canGoNext)}
        >
          Proxima
        </Button>
        
      </Stack>
    </Stack>
  );
};
