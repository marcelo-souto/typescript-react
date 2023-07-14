import React from "react";
import InputText from "../Form/inputText";

const LoginForm: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <InputText label="Email:" id="email" />
        <InputText label="Senha:" id="password" type="password" />
      </form>
    </div>
  );
};

export default LoginForm;
