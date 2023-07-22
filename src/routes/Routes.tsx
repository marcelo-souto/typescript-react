import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { LoginForm } from "../components/Login/LoginForm/LoginForm";
import { RegisterForm } from "../components/Login/RegisterForm/RegisterForm";
import { ProtectedRoute } from "./ProtectedRoute";
import { DashboardPage } from "../pages/DashboardPage";
import { QuizPage } from "../pages/QuizPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="/quiz/:id" element={<QuizPage />} />
    </Routes>
  );
};
