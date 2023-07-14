import { z } from "zod";

export const userLoginPropsSchema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório.")
    .email("Insira um email válido."),
  password: z
    .string()
    .nonempty("Campo obrigatório.")
    .min(8, "Senha deve ter pelo menos 8 caracteres"),
});

export type UserLoginProps = z.infer<typeof userLoginPropsSchema>;
