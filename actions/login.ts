"use server"

import { z } from "zod"; 
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { loginSchema } from "@/lib/formsSchemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export async function actionLogin(values: z.infer<typeof loginSchema>) {

  const validateFields = loginSchema.safeParse(values);
  if(!validateFields.success) {
    return { message: "Invalid data!" };
  }

  const { email, password } = validateFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch(error) {
    if(error instanceof AuthError) {
      switch(error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentails!" }
        default:
          return { error: "Something went wrong!" }
        }
    }

    throw error;
  }
}