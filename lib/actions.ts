"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import { createSecretKey } from "crypto";
import { connectDB } from "./connectDb";
import User from "@/models/User";

type State = {
  error?: string;
  success?: boolean;
};

export async function loginAction(prevState: State | null, formData: FormData) {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || !email.includes("@")) {
    return { error: "Invalid email" };
  }
  if (typeof password !== "string" || password.length < 8) {
    return { error: "Password must be at least 8 characters" };
  }

  await connectDB();

  const secret = process.env.SECRET;
  if (!secret) return { error: "secret is missing contact website admin" };
  const secretKey = createSecretKey(Buffer.from(secret, "utf-8"));

  const user = await User.findOne({ email });
  if (!user) return { error: "user with this email doesnot exist" };

  const isValid = await user.verifyPassword(password);
  if (!isValid) return { error: "invalid password" };

  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secretKey);

  (await cookies()).set("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/");
}

export async function registerAction(
  prevState: State | null,
  formData: FormData,
) {
  "use server";
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || !email.includes("@")) {
    return { error: "Invalid email" };
  }
  if (typeof password !== "string" || password.length < 8) {
    return { error: "Password must be at least 8 characters" };
  }

  await connectDB();

  const secret = process.env.SECRET;
  if (!secret) return { error: "secret is missing contact website admin" };
  const secretKey = createSecretKey(Buffer.from(secret, "utf-8"));

  const user = await User.findOne({ email });
  if (user) return { error: "user with this email already exist" };

  const newUser = {
    email,
    password,
  };

  await User.create(newUser);

  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secretKey);

  (await cookies()).set("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/");
}
