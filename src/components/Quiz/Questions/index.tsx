import React from "react";
import { IQuestion } from "../../../api/api";
import { Question } from "../Question";

interface QuestionsProps {
  questions: IQuestion[];
  currentQuestion: number;
  seeAll?: boolean;
}

export const Questions: React.FC<QuestionsProps> = ({
  questions,
  seeAll,
  currentQuestion,
}) => {

  if (seeAll)
    return (
      <>
        {questions.map((question) => (
          <Question key={question.id} question={question}/>
        ))}
      </>
    );

  if (!seeAll ?? currentQuestion)
    return (
      <>
        {questions.map((question, index) => {
          if (index === currentQuestion)
            return <Question key={question.id} question={question} />;
        })}
      </>
    );
};
