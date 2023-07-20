import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { IQuestion } from "../../api/api";
import { Control, Controller } from "react-hook-form";
import { Option } from "./Option";

export interface QuestionProps {
  question: IQuestion;
  control: Control;
}

export const Question: React.FC<QuestionProps> = ({ question, control }) => {
  return (
    <Stack>

      <Typography variant="h5" component="h1">
        {question.text}
      </Typography>

      <FormControl>
        <Controller
          name={question.id}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <RadioGroup {...field}>
              {question.options.map((option, index) => (
                <Option key={index} option={option} checked={field.value === option} />
              ))}
            </RadioGroup>
          )}
        />

      </FormControl>
    </Stack>
  );
};
