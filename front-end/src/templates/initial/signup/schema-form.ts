import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email({ message: "E-mail inválido" }),
    password: z
      .string()
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
    confirmPassword: z
      .string()
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
  })
  .refine((value) => value.confirmPassword === value.password, {
    path: ["confirmPassword"],
    message: "As senha não são iguais",
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
