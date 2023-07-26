import React from "react";
import { useParams } from "react-router-dom";
import { useQuizStore } from "../store/store";
import { QuizEmailForm } from "../components/Quiz/QuizEmailForm";
import { QuizQuestionsForm } from "../components/Quiz/QuizQuestionsForm/QuizQuestionsForm";

export const QuizPage = () => {
  const params = useParams();
  const { setQuizId, quizStep } = useQuizStore((state) => state);

  React.useEffect(() => {
    if (params.id) setQuizId(params.id);
  }, [params]);

  if (quizStep === "email") return <QuizEmailForm />;
  if (quizStep === "answer") return <QuizQuestionsForm />;
};
