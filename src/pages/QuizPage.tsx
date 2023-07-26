import { Quiz } from "../components/Quiz/Quiz";
import { QuizAppStateProvider } from "../context/QuizContext";

export const QuizPage = () => {
  return (
    <QuizAppStateProvider>
      <Quiz />
    </QuizAppStateProvider>
  );
};
