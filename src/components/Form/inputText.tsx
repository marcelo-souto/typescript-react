import React from "react";

interface InputTextProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

const InputText: React.FC<InputTextProps> = ({
  id,
  type = "text",
  label,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} {...props} />
    </div>
  );
};

export default InputText;
