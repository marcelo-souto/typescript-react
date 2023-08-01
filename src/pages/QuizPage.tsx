import { useQuizStore } from "../store/store";
import { QuizEmailForm } from "../components/Quiz/QuizEmailForm";
import { QuizQuestionsForm } from "../components/Quiz/QuizQuestionsForm";

export const QuizPage = () => {

  const { quizStep } = useQuizStore((state) => state);

  if (quizStep === "email") return <QuizEmailForm />;
  if (quizStep === "answer") return <QuizQuestionsForm />;
};
