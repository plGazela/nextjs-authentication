"use server"

import { z } from "zod"; 
import bcrypt from "bcrypt";
import { prisma } from "@/lib/db";
import { registerSchema } from "@/lib/formsSchemas";

export async function actionRegister(values: z.infer<typeof registerSchema>) {

  const validateFields = registerSchema.safeParse(values);
  if(!validateFields.success) {
    return { message: "Invalid data!" };
  }

  const { email, password, name } = validateFields.data;
  const hashedPassowrd = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    }
  });
  if(existingUser) {
    return { error: "Email already taken." };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassowrd,
    }
  });

  // TODO: Send email verification

  return { message: "User created." };
}