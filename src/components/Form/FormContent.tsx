import React from "react";

interface FormContentProps extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
}

export const FormContent = React.forwardRef(
  (
    { children, onSubmit, ...props }: FormContentProps,
    ref: React.LegacyRef<HTMLFormElement>
  ) => {
    return (
      <form onSubmit={onSubmit} ref={ref} {...props}>
        {children}
      </form>
    );
  }
);
