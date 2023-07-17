import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../queries/useUser";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  
  const { user } = useUser();

  return user ? children : <Navigate to="/login" />;
};
