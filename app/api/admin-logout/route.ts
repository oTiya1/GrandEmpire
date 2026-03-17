import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const url = new URL(req.url);

  const response = NextResponse.redirect(
    new URL("/admin/login", url.origin)
  );

  response.cookies.set("admin_auth", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });

  return response;
}