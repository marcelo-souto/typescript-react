import axios from "axios";
import { UserLoginProps } from "../types/types";

export const api = axios.create({
  baseURL: "https://typescript-api-three.vercel.app",
});

export const userLogin = async (credentials: UserLoginProps) => {
  const response = await api.post<string>("/user/auth", credentials);
  return response.data;
};
