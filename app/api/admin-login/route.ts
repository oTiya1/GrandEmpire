import { NextRequest, NextResponse } from "next/server";
import { createAdminSession } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (password?.trim() !== process.env.ADMIN_PASSWORD?.trim()) {
    return NextResponse.json(
      { message: "Invalid password" },
      { status: 401 }
    );
  }

  const token = await createAdminSession();

  const response = NextResponse.json({ success: true });

  response.cookies.set("admin_auth", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}