import React from "react";
import { InputText } from "../Form/inputText";

const RegisterForm: React.FC = () => {
  return (
    <div>
      <h1>Cadastre-se</h1>
      <form>
        <InputText label="Nome:" id="name" />
        <InputText label="Email:" id="email" />
        <InputText label="Senha:" id="password" type="password" />
      </form>
    </div>
  );
};

export default RegisterForm;
