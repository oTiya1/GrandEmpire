"use client";

import { useState } from "react";

export default function ReservePage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      guests: Number(formData.get("guests")),
      date: formData.get("date"),
      time: formData.get("time"),
    };

    const res = await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setMessage("Reservation Successful.");
      e.target.reset();
    } else {
      setMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-32 pb-24">

        <div className="absolute inset-0">
          <div className="grid h-full grid-cols-2 md:grid-cols-4">

            <div className="relative">
              <img
                src="/gallery1.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-100"
              />
            </div>

            <div className="relative">
              <img
                src="/gallery4.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-100"
              />
            </div>

            <div className="relative hidden md:block">
              <img
                src="/gallery5.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-100"
              />
            </div>

            <div className="relative hidden md:block">
              <img
                src="/gallery6.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-100"
              />
            </div>

          </div>

          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
            Reservations
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-semibold">
            Book your table
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Reserve your table at Grand Empire and enjoy a refined dining
            experience in South London.
          </p>

        </div>
      </section>

      {/* FORM */}
      <section className="px-6 pb-28">

        <div className="mx-auto max-w-3xl">

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-yellow-600/20 bg-[#0d0d0d] p-10 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
          >

            <div className="grid gap-6 md:grid-cols-2">

              <input
                name="name"
                placeholder="Full Name"
                required
                className="rounded-xl border border-yellow-600/20 bg-black p-4 outline-none focus:border-yellow-500"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="rounded-xl border border-yellow-600/20 bg-black p-4 outline-none focus:border-yellow-500"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                required
                className="rounded-xl border border-yellow-600/20 bg-black p-4 outline-none focus:border-yellow-500"
              />

              <input
                name="guests"
                type="number"
                min="1"
                placeholder="Guests"
                required
                className="rounded-xl border border-yellow-600/20 bg-black p-4 outline-none focus:border-yellow-500"
              />

              <input
                name="date"
                type="date"
                required
                className="rounded-xl border border-yellow-600/20 bg-black p-4 outline-none focus:border-yellow-500"
              />

              <input
                name="time"
                type="time"
                required
                className="rounded-xl border border-yellow-600/20 bg-black p-4 outline-none focus:border-yellow-500"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full rounded-full bg-yellow-600 py-4 font-bold text-black transition hover:bg-yellow-500"
            >
              {loading ? "Booking..." : "Reserve Table"}
            </button>

            {message && (
              <p className="mt-6 text-center text-yellow-500">
                {message}
              </p>
            )}

          </form>

        </div>

      </section>

    </main>
  );
}