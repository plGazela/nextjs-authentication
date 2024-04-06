import { z } from "zod"; 

export const loginSchema = z.object({
  email: z.string().min(1, "E-Mail is required.").email("Invalid e-mail."),
  password: z.string().min(1, "Password is required."),
});

export const registerSchema = z.object({
  email: z.string().min(1, "E-Mail is required.").email("Invalid e-mail."),
  password: z.string().min(8, "Password must be at least 8 characters long."),
  name: z.string().min(3, "Name must be at least 3 characters long.")
});