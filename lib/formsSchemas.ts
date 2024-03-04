import { z } from "zod"; 

export const loginSchema = z.object({
  email: z.string().min(1, "E-Mail is required").email("Invalid e-mail"),
  password: z.string().min(1, "Password is required"),
});