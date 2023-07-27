import React from "react";
import { useQuizStore } from "../../../store/store";
import { useForm } from "react-hook-form";

export const useQuestion = () => {
  const { control, watch } = useForm<Record<string, string>>();
  const {
    answerQuizQuestion,
    quizForm: { answers },
  } = useQuizStore((state) => state);

  const answerQuestion = React.useCallback(answerQuizQuestion, [
    answerQuizQuestion,
  ]);

  return { control, watch, answers, answerQuestion };
};
