"use client";

import Link from "next/link";

export default function FloatingReserveButton() {
  return (
    <Link
      href="/reservation"
      className="fixed bottom-6 right-6 z-[60] px-6 py-4 rounded-full bg-yellow-600 text-black font-bold shadow-[0_0_30px_rgba(234,179,8,0.35)] hover:bg-yellow-500 transition"
    >
      Reserve a Table
    </Link>
  );
}