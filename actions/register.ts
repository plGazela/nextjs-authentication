"use server"

import { z } from "zod"; 
import { registerSchema } from "@/lib/formsSchemas";

export async function actionRegister(values: z.infer<typeof registerSchema>) {

  const validateFields = registerSchema.safeParse(values);
  if(!validateFields.success) {
    return { message: "Invalid data!" };
  }

  return { message: "Data sent!" };
}