import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

  const queryClient = useQueryClient()

  const user = queryClient.getQueryData(["user"])
  console.log(user)


  return user ? children : <Navigate to="/login" />;
};
