import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { verifyAdminSession } from "@/lib/admin-auth";

function formatDateTime(date: Date | string) {
  return new Date(date).toLocaleString([], {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function getStatusClasses(status: string) {
  switch (status) {
    case "confirmed":
      return "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20";
    case "cancelled":
      return "bg-red-500/15 text-red-300 border border-red-500/20";
    default:
      return "bg-amber-500/15 text-amber-300 border border-amber-500/20";
  }
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_auth")?.value;

  if (!token) {
    redirect("/admin/login");
  }

  const session = await verifyAdminSession(token);

  if (!session) {
    redirect("/admin/login");
  }

  const reservations = await prisma.reservation.findMany({
    include: { table: true },
    orderBy: { startTime: "asc" },
  });

  const today = new Date();
  const todayString = today.toDateString();

  const todaysReservations = reservations.filter(
    (r) => new Date(r.startTime).toDateString() === todayString
  );

  const confirmedCount = reservations.filter(
    (r) => r.status === "confirmed"
  ).length;

  const cancelledCount = reservations.filter(
    (r) => r.status === "cancelled"
  ).length;

  const pendingCount = reservations.filter(
    (r) => r.status !== "confirmed" && r.status !== "cancelled"
  ).length;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_30%),linear-gradient(to_bottom,_#050505,_#0d0d0d,_#111111)] text-white px-6 py-8 md:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#D4AF37] mb-2">

            </p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Reservations Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-white/60">
              Monitor bookings, confirm guest arrivals, and manage the dining
              schedule from one refined control center.
            </p>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <p className="text-sm text-white/55">Today&apos;s Reservations</p>
            <h2 className="mt-3 text-4xl font-semibold text-[#D4AF37]">
              {todaysReservations.length}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <p className="text-sm text-white/55">Confirmed</p>
            <h2 className="mt-3 text-4xl font-semibold">{confirmedCount}</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <p className="text-sm text-white/55">Pending</p>
            <h2 className="mt-3 text-4xl font-semibold">{pendingCount}</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <p className="text-sm text-white/55">Cancelled</p>
            <h2 className="mt-3 text-4xl font-semibold">{cancelledCount}</h2>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div>
              <h2 className="text-xl font-semibold">All Reservations</h2>
              <p className="text-sm text-white/50 mt-1">
                A complete overview of current guest bookings.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-white/5">
                <tr className="text-left text-sm text-white/55">
                  <th className="px-6 py-4 font-medium">Guest</th>
                  <th className="px-6 py-4 font-medium">Guests</th>
                  <th className="px-6 py-4 font-medium">Table</th>
                  <th className="px-6 py-4 font-medium">Date & Time</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>

              <tbody>
                {reservations.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-16 text-center text-white/45"
                    >
                      No reservations found yet.
                    </td>
                  </tr>
                ) : (
                  reservations.map((r) => (
                    <tr
                      key={r.id}
                      className="border-t border-white/10 hover:bg-white/[0.03] transition"
                    >
                      <td className="px-6 py-5">
                        <div className="space-y-1">
                          <p className="font-medium text-white">{r.name}</p>
                          <p className="text-sm text-white/45">{r.email}</p>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-white/80">{r.guests}</td>

                      <td className="px-6 py-5 text-white/80">
                        Table {r.table.tableNumber}
                      </td>

                      <td className="px-6 py-5 text-white/70">
                        {formatDateTime(r.startTime)}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize ${getStatusClasses(
                            r.status
                          )}`}
                        >
                          {r.status}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex flex-wrap gap-2">
                          <form
                            action={`/api/reservations/${r.id}/confirm`}
                            method="POST"
                          >
                            <button className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:brightness-110">
                              Confirm
                            </button>
                          </form>

                          <form
                            action={`/api/reservations/${r.id}/cancel`}
                            method="POST"
                          >
                            <button className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:brightness-110">
                              Cancel
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}