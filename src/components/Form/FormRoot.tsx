import React from "react";

interface FormRootProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const FormRoot: React.FC<FormRootProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
