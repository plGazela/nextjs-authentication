import { prisma } from "@/lib/db";

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return user;
  } catch {
    return null;
  }
}

export async function getUserByID(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  } catch {
    return null;
  }
}