import { FormControl, RadioGroup, Stack, Typography } from "@mui/material";
import React from "react";
import { IQuestion } from "../../../api/api";
import { Controller, useForm } from "react-hook-form";
import { Option } from "../Option";
import { useQuizStore } from "../../../store/store";
import { useQuestion } from "./useQuestion";

export interface QuestionProps {
  question: IQuestion;
}

export const Question: React.FC<QuestionProps> = ({ question }) => {
  
  const { control, watch, answers, answerQuestion } = useQuestion();

  const answer = watch(question.id);

  React.useEffect(() => {
    if (answer) answerQuestion(question.id, answer);
  }, [answer, answerQuestion, question.id]);

  return (
    <Stack spacing={4}>
      <Typography variant="h5" component="p">
        {question.text}
      </Typography>

      <FormControl>
        <Controller
          name={question.id}
          control={control}
          defaultValue={
            answers.find((item) => item.id === question.id)?.answer ?? ""
          }
          render={({ field }) => (
            <RadioGroup {...field}>
              {question.options.map((option, index) => (
                <Option
                  key={index}
                  option={option}
                  checked={field.value === option}
                />
              ))}
            </RadioGroup>
          )}
        />
      </FormControl>
    </Stack>
  );
};
