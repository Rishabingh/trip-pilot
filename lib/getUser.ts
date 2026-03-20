import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { createSecretKey } from "crypto";

type JWTPayload = {
  email: string;
};

export default async function getUser(): Promise<JWTPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;

  try {
    const secret = process.env.SECRET;
    if (!secret) return null;
    const secretKey = createSecretKey(Buffer.from(secret, "utf-8"));
    const { payload } = await jwtVerify(token, secretKey);
    return payload as JWTPayload;
  } catch {
    return null;
  }
}
