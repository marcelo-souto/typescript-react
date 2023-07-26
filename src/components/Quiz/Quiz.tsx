import { useQuizAppState } from "../../context/QuizContext";
import { Questions } from "./Questions";
import { QuizEmailForm } from "./QuizEmailForm";

export const Quiz = () => {
  const { quizState } = useQuizAppState();

  if (quizState.state === 1) return <QuizEmailForm />;
  if (quizState.state === 2) return <Questions />;
};
