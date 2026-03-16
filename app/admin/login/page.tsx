"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        window.location.href = "/admin";
        return;
      }

      const data = await res.json();
      setError(data.message || "Invalid password");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_35%),linear-gradient(to_bottom,_#0a0a0a,_#111111,_#050505)] text-white flex items-center justify-center px-6">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/images/noise.png')]" />

      <div className="relative w-full max-w-md">
        <div className="rounded-3xl border border-[#C9A14A]/25 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] overflow-hidden">
          <div className="px-8 pt-10 pb-6 text-center border-b border-white/10">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] mb-3">
              Private Access
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Admin Portal
            </h1>
            <p className="mt-3 text-sm text-white/65 leading-relaxed">
              Sign in to manage reservations, monitor guest flow, and oversee
              the dining experience.
            </p>
          </div>

          <form onSubmit={handleLogin} className="px-8 py-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-white/75">Admin Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-white placeholder:text-white/35 outline-none transition focus:border-[#D4AF37]/60 focus:ring-2 focus:ring-[#D4AF37]/20"
              />
            </div>

            {error && (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-[#D4AF37] px-4 py-3.5 text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 shadow-[0_10px_30px_rgba(212,175,55,0.25)]"
            >
              {loading ? "Signing in..." : "Enter Dashboard"}
            </button>
          </form>

          <div className="px-8 pb-8 text-center">
            <p className="text-xs text-white/40">
              Secure access for authorized staff only.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}