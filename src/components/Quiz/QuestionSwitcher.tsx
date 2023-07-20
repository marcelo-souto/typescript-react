import React from "react";

interface QuestionSwitcherProps {
  currentQuestion: number;
  showAll?: boolean;
  children: React.ReactNode[];
}

export const QuestionSwitcher: React.FC<QuestionSwitcherProps> = ({
  currentQuestion,
  children,
  showAll = false
}) => {
  return showAll ? children : <>{children[currentQuestion]}</>;
};
