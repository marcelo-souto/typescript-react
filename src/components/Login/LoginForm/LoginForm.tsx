import React from "react";
import { InputText } from "../../Input/inputText";
import { useLoginForm } from "./useLoginForm";
import Form from "../../Form/index";

const LoginForm: React.FC = () => {
  const { handleSubmit, register, errors, onSubmit } = useLoginForm();

  return (
    <Form.Root>
      <Form.Title title="Login" />

      <Form.Content onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="Email:"
          {...register("email")}
          error={errors.email?.message}
        />

        <InputText
          label="Senha:"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <button>Enviar</button>
      </Form.Content>
    </Form.Root>
  );
};

export default LoginForm;
