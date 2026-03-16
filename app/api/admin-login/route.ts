import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  console.log("ENV PASSWORD:", process.env.ADMIN_PASSWORD);
  console.log("INPUT PASSWORD:", password);

  if (password?.trim() === process.env.ADMIN_PASSWORD?.trim()) {
    const response = NextResponse.json({ success: true });

    response.cookies.set("admin_auth", "true", {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  }

  return NextResponse.json(
    { message: "Invalid password" },
    { status: 401 }
  );
}