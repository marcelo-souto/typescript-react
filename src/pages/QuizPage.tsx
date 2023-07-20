import React from "react";
import { Button, Stack } from "@mui/material";
import { Question } from "../components/Quiz/Question";
import { useParams } from "react-router-dom";
import { useQuiz } from "../queries/useQuiz";
import { Loading } from "../components/Helpers/Loading";
import { Quiz } from "../components/Quiz/Quiz";

export const QuizPage = () => {
  
  const { quizId } = useParams();
  const { quiz, isLoading } = useQuiz(quizId as string);

  if (isLoading) return <Loading />;

  if (quiz) return <Quiz quiz={quiz} />;
};
