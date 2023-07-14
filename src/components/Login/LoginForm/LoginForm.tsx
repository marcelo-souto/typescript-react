import React from "react";
import { InputText } from "../../Form/inputText";
import { useLoginForm } from "./useLoginForm";

const LoginForm: React.FC = () => {
  
  const { handleSubmit, register, errors, onSubmit } = useLoginForm();

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </div>
  );
};

export default LoginForm;
