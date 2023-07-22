import { useQuery } from "@tanstack/react-query";
import { getQuiz } from "../api/api";

export const useGetQuiz = (quizId: string) => {

  const { data: quiz, ...rest } = useQuery({
    
    queryKey: ["quiz", quizId],
    queryFn: () => getQuiz(quizId),

    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
  });

  return { quiz, ...rest };
};


export type UseGetQuizReturn = ReturnType<typeof useGetQuiz>