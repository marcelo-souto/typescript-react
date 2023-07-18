import React from "react";
import { Button, Stack } from "@mui/material";
import { Question } from "../components/Quiz/Question";
import { useParams } from "react-router-dom";
import { useQuiz } from "../queries/useQuiz";
import { Loading } from "../components/Helpers/Loading";
import { useForm } from "react-hook-form";

export const QuizPage = () => {

  const { quizId } = useParams();
  const { quiz, isLoading } = useQuiz(quizId as string);

  const [page, setPage] = React.useState<number>(0);

  const defaultValues = quiz?.questions.reduce(
    (prev, curr) => ({ ...prev, [curr.id]: "" }),
    {}
  );

  const { control } = useForm({ defaultValues });


  if (isLoading) return <Loading />;

  return (
    <Stack>

      {quiz?.questions.map(
        (question, index) =>
          page === index && (
            <Question control={control} key={question.id} question={question} />
          )
      )}

      <Button variant="contained" onClick={() => setPage(page + 1)}>
        Proxima
      </Button>
      
    </Stack>
  );
};
