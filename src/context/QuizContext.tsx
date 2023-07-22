import React from "react";
import { UseGetQuizReturn } from "../queries/useGetQuiz";
import { Control, useForm} from "react-hook-form";
import { useSteps } from "../hooks/useSteps";

type QuizContextReturn = {
  control: Control;
  isCurrentQuestionAnswered: boolean;
  currentQuestion: number;
  totalQuestions: number
  nextQuestion: (condition?: boolean) => void;
  prevQuestion: (condition?: boolean) => void;
} & UseGetQuizReturn;

export const QuizContext = React.createContext({} as QuizContextReturn);

type QuizProviderProps = {
  children: React.ReactNode;
} & UseGetQuizReturn;

export const QuizProvider: React.FC<QuizProviderProps> = ({ children, quiz, ...others }) => {

  const totalQuestions = quiz?.questions.length as number

  const { control, watch } = useForm<Record<string, string>>({
    defaultValues: quiz?.questions.reduce((prev, question) => {
      return { ...prev, [question.id]: "" };
    }, {}),
  });

  const {
    nextStep: nextQuestion,
    prevStep: prevQuestion,
    currentStep: currentQuestion,
  } = useSteps({ totalSteps: totalQuestions - 1 });

  const isCurrentQuestionAnswered = !!watch(
    quiz?.questions[currentQuestion].id as string
  );

  return (
    <QuizContext.Provider
      value={{
        quiz,
        control,
        totalQuestions,
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
