import React from "react";
import styled from "styled-components";

interface InputTextProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error: string | undefined;
}

const Input = styled.input`
  padding: 0.6rem 0.8rem;
  border-radius: 0.25rem;
  border: none;
  font-size: 1rem;
  font-weight: ${(props) => props.theme.typography.regular};
`;

export const InputText = React.forwardRef(
  (
    { id, type, label, error, ...props }: InputTextProps,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <Input ref={ref} type={type} id={id} name={id} {...props} />
        {error}
      </div>
    );
  }
);
