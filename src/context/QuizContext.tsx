import React from "react";
import { useParams } from "react-router-dom";
import { useGetQuiz, UseGetQuizReturn } from "../queries/useGetQuiz";
import { Control, useForm, UseFormWatch } from "react-hook-form";
import { useSteps } from "../hooks/useSteps";

type QuizContextReturn = {
  control: Control;
  watch: UseFormWatch<Record<string, string>>;
  isCurrentQuestionAnswered: boolean;
  currentQuestion: number;
  nextQuestion: (condition?: boolean) => void;
  prevQuestion: (condition?: boolean) => void;
} & UseGetQuizReturn;

export const QuizContext = React.createContext({} as QuizContextReturn);

interface QuizProviderProps {
  children: React.ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const { id } = useParams();
  const { quiz, ...others } = useGetQuiz(id as string);

  const totalSteps = quiz?.questions.length as number;

  const { control, watch } = useForm<Record<string, string>>({
    defaultValues: quiz?.questions.reduce((prev, question) => {
      return { ...prev, [question.id]: "" };
    }, {}),
  });

  const {
    nextStep: nextQuestion,
    prevStep: prevQuestion,
    currentStep: currentQuestion,
  } = useSteps({ totalSteps: totalSteps - 1 });

  const isCurrentQuestionAnswered = !!watch(
    quiz?.questions[currentQuestion].id as string
  );

  return (
    <QuizContext.Provider
      value={{
        quiz,
        control,
        watch,
        nextQuestion,
        prevQuestion,
        currentQuestion,
        isCurrentQuestionAnswered,
        ...others,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => React.useContext(QuizContext);
