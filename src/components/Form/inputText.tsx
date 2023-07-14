import React, { LegacyRef } from "react";

interface InputTextProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error: string | undefined
}

export const InputText = React.forwardRef(
  (
    { id, type, label, error, ...props }: InputTextProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input ref={ref} type={type} id={id} name={id} {...props} />
        {error}
      </div>
    );
  }
);