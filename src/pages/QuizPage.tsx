import { Quiz } from "../components/Quiz/Quiz";
import { QuizProvider } from "../context/QuizContext";

export const QuizPage = () => {

  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
};
