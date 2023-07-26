import { useForm } from "react-hook-form";
import { useGetQuiz } from "../../../queries/useGetQuiz";
import { useQuizStore } from "../../../store/store";
import { useSteps } from "../../../hooks/useSteps";

export const useQuizQuestionsForm = () => {

  const { id } = useQuizStore((state) => state.quizForm);
  const { quiz, isLoading, isError, error } = useGetQuiz(id as string);

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

  return {
    quiz,
    isLoading,
    isError,
    error,
    nextQuestion,
    prevQuestion,
    currentQuestion,
    totalQuestions,
    isCurrentQuestionAnswered,
    control,
  };
};
