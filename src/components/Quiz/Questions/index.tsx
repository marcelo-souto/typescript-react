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
  return (
    <>
    
      {seeAll &&
        questions.map((question) => (
          <Question key={question.id} question={question} mb={8} />
        ))}

      {(!seeAll ?? currentQuestion) &&
        questions.map(
          (question, index) =>
            currentQuestion === index && (
              <Question key={question.id} question={question} />
            )
        )}

    </>
  );
};
