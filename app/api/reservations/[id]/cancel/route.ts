import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { verifyAdminSession } from "@/lib/admin-auth";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_auth")?.value;

  if (!token || !(await verifyAdminSession(token))) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  await prisma.reservation.update({
    where: { id },
    data: { status: "cancelled" },
  });

  return NextResponse.redirect(new URL("/admin", req.url));
}