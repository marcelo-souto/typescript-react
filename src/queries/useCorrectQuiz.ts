import { useMutation } from "@tanstack/react-query";
import { IQuizAnswers, correctQuiz } from "../api/api";

export const useCorrectQuiz = () => {
  const {
    data: result,
    mutate: correctQuizMutation,
    ...rest
  } = useMutation({
    mutationFn: (answers: IQuizAnswers) => correctQuiz(answers),
    onSuccess: (data) => console.log(data)
  });

  return { result, correctQuizMutation, ...rest };
};
