import { useParams } from "react-router-dom";
import { useQuiz } from "../queries/useQuiz";
import { Button, Stack } from "@mui/material";
import { Question } from "../components/Quiz/Question";
import React from "react";
import { Loading } from "../components/Helpers/Loading";

export const QuizPage = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const { quiz, isLoading } = useQuiz(quizId as string);

  const [page, setPage] = React.useState<number>(0);

  if (isLoading) return <Loading />;
  return (
    <Stack>
      {quiz?.questions.map((question, index) => {
        if (page === index)
          return <Question key={question.id} question={question} />;
      })}
      <Button onClick={() => setPage(page + 1)}>Proxima</Button>
    </Stack>
  );
};
