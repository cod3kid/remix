import { prisma } from "./database.server";
import { compare, hash } from "bcryptjs";

export async function signUp({ email, password }) {
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (existingUser) {
    const error = new Error("User with given email already exists");
    error.status = 422;
    throw error;
  }

  const passwordHash = await hash(password, 12);

  await prisma.user.create({
    data: {
      email,
      password: passwordHash,
    },
  });
}

export async function login({ email, password }) {
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (!existingUser) {
    const error = new Error("Invalid Credentials");
    error.status = 401;
    throw error;
  }

  const passwordCorrect = await compare(password, existingUser.password);

  if (!passwordCorrect) {
    const error = new Error("Invalid Credentials");
    error.status = 401;
    throw error;
  }
}
