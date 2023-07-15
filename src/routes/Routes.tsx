import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { LoginForm } from "../components/Login/LoginForm/LoginForm";
import { RegisterForm } from "../components/Login/RegisterForm/RegisterForm";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Route>
    </Routes>
  );
};
