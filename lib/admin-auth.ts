import "server-only";
import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.ADMIN_SECRET;
if (!secretKey) {
  throw new Error("ADMIN_SECRET is missing in environment variables");
}

const encodedKey = new TextEncoder().encode(secretKey);

export async function createAdminSession() {
  return await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(encodedKey);
}

export async function verifyAdminSession(token: string) {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch {
    return null;
  }
}