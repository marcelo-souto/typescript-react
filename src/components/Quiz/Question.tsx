import { Stack, Typography } from "@mui/material";
import React from "react";
import { IQuestion } from "../../api/api";

export interface QuestionProps {
  question: IQuestion;
}

export const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <Stack>
      <Typography variant="h5" component="h1">{question.text}</Typography>
    </Stack>
  );
};
