import { useParams } from "react-router-dom";
import { Quiz } from "../components/Quiz/Quiz";
import { QuizProvider } from "../context/QuizContext";
import { useGetQuiz } from "../queries/useGetQuiz";

export const QuizPage = () => {

  const { id } = useParams();
  const getQuizQuery = useGetQuiz(id as string);

  return (
    <QuizProvider {...getQuizQuery}>
      <Quiz />
    </QuizProvider>
  );
};
