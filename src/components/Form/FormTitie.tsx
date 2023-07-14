import React from "react";

interface FormTitleProps {
  title: string;
}

export const FormTitie: React.FC<FormTitleProps> = ({ title }) => {
  return <h1>{title}</h1>;
};
