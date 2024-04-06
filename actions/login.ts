"use server"

import { z } from "zod"; 
import { loginSchema } from "@/lib/formsSchemas";

export async function actionLogin(values: z.infer<typeof loginSchema>) {

  const validateFields = loginSchema.safeParse(values);
  if(!validateFields.success) {
    return { message: "Invalid data!" };
  }

  return { message: "Data sent!" };
}