import { useQuery } from "@tanstack/react-query";
import { getUserQuizzes } from "../api/api";

export const useUserQuizzes = () => {

  const { data: quizzes, ...rest } = useQuery({
    queryKey: ["quizzes"],
    queryFn: getUserQuizzes,
  });


  return { quizzes, ...rest };
};
