"use server"

import { z } from "zod"; 
import bcrypt from "bcrypt";
import { prisma } from "@/lib/db";
import { registerSchema } from "@/lib/formsSchemas";

export async function actionRegister(values: z.infer<typeof registerSchema>) {

  const validateFields = registerSchema.safeParse(values);
  if(!validateFields.success) {
    return { status: 406, message: "Provided data is not error-free." };
  }

  const { email, password, name } = validateFields.data;
  const hashedPassowrd = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    }
  });
  if(existingUser) {
    return { status: 418, message: "Provided e-mail is already taken." };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassowrd,
    }
  });

  // TODO: Send email verification

  return { status: 201, message: "The account was created. Please log in." };
}