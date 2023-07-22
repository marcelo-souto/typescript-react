import React from "react";
import { useQuizContext } from "../../context/QuizContext";
import { Question } from "./Question";

interface QuestionSwitcherProps {
  showAll?: boolean;
}

export const QuestionSwitcher: React.FC<QuestionSwitcherProps> = ({
  showAll = false,
}) => {
  
  const { quiz, control, currentQuestion } = useQuizContext();

  return (
    <>
      {!showAll &&
        quiz?.questions.map((question, index) => {
          if (index === currentQuestion)
            return (
              <Question
                key={question.id}
                question={question}
                control={control}
              />
            );
        })}

      {showAll &&
        quiz?.questions.map((question) => {
          return (
            <Question key={question.id} question={question} control={control} />
          );
        })}
    </>
  );
};
