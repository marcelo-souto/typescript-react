import { useGetQuiz } from "../../../queries/useGetQuiz";
import { useQuizStore } from "../../../store/store";
import { useSteps } from "../../../hooks/useSteps";
import { useCorrectQuiz } from "../../../queries/useCorrectQuiz";
import { IQuizAnswers } from "../../../api/api";

export const useQuizQuestionsForm = () => {

  const { quizForm } = useQuizStore((state) => state);

  const { quiz, isLoading, isError, error } = useGetQuiz(quizForm.quiz_id as string);
  const { correctQuizMutation } = useCorrectQuiz();

  const totalQuestions = quiz?.questions.length as number;

  const {
    nextStep: nextQuestion,
    prevStep: prevQuestion,
    currentStep: currentQuestion,
  } = useSteps({ totalSteps: totalQuestions - 1 });

  const areAllQuestionsAnswered = quizForm.answers.length === totalQuestions;

  const handleSubmit = () => correctQuizMutation(quizForm as IQuizAnswers);

  return {
    quiz,
    isLoading,
    isError,
    error,
    nextQuestion,
    prevQuestion,
    currentQuestion,
    totalQuestions,
    areAllQuestionsAnswered,
    handleSubmit,
  };
};
