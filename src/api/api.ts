import axios from "axios";
import { UserLoginProps, UserRegisterProps } from "../types/types";

export const api = axios.create({
  baseURL: "https://typescript-api-three.vercel.app",
});

export const userLogin = async (credentials: UserLoginProps) => {
  const response = await api.post<string>("/user/auth", credentials);
  api.defaults.headers.Authorization = `Bearer ${response.data}`;
  return response.data;
};

export const userRegister = async (data: UserRegisterProps) => {
  const response = await api.post<string>("/user/create", data);
  return response.data;
};

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export const getUser = async (token: string | null) => {
  if (!token) return null;

  const response = await api.get<IUser>("/user/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  api.defaults.headers.Authorization = `Bearer ${token}`;
  return response.data;
};

export interface IQuiz {
  id: string;
  name: string;
}

export const getUserQuizzes = async () => {
  const response = await api.get<IQuiz[]>("/quiz");
  return response.data;
};
