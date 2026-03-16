"use client";

import { useState } from "react";

export default function ReservePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);
  const [startTime, setStartTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          guests,
          startTime,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Something went wrong");
      } else {
        setMessage("Reservation successful! Confirmation email sent 👑");
        setName("");
        setEmail("");
        setGuests(1);
        setStartTime("");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-[#111] p-10 rounded-xl shadow-2xl border border-yellow-600">
        <h1 className="text-4xl mb-6 text-center text-yellow-500">
          Reserve a Table
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          <input
            type="number"
            min="1"
            max="12"
            placeholder="Number of Guests"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition p-3 rounded text-black font-bold"
          >
            {loading ? "Booking..." : "Book Table"}
          </button>
        </form>

        {message && (
          <p className="mt-6 text-center text-sm text-yellow-400">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}