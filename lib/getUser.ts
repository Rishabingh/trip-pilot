import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { createSecretKey } from "crypto";

export default async function getUser() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('token')?.value;
  if (!token) return null;

  try {
    const secret = 'testSecret';
    const secretKey = createSecretKey(Buffer.from(secret, 'utf-8'));
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch {
    return null;
  }
}