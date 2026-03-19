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
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_30%),linear-gradient(to_bottom,_#050505,_#0d0d0d,_#111111)] px-4 pb-6 pt-28 text-white sm:px-6 md:px-10 md:pb-8 md:pt-32">
  <div className="mx-auto max-w-7xl space-y-8 md:space-y-10">
    <header className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[#D4AF37]/80 md:mb-4">
          Admin Control Center
        </p>

        <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
          Reservations Dashboard
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:mt-5 md:text-base">
          Monitor bookings, confirm guest arrivals, and manage the dining
          schedule from one refined control center.
        </p>
      </div>
    </header>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-6">
            <p className="text-sm text-white/55">Today&apos;s Reservations</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#D4AF37] md:text-4xl">
              {todaysReservations.length}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-6">
            <p className="text-sm text-white/55">Confirmed</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {confirmedCount}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-6">
            <p className="text-sm text-white/55">Pending</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {pendingCount}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-6">
            <p className="text-sm text-white/55">Cancelled</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {cancelledCount}
            </h2>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="border-b border-white/10 px-5 py-5 md:px-6">
            <div>
              <h2 className="text-xl font-semibold">All Reservations</h2>
              <p className="mt-1 text-sm text-white/50">
                A complete overview of current guest bookings.
              </p>
            </div>
          </div>

          {reservations.length === 0 ? (
            <div className="px-6 py-16 text-center text-white/45">
              No reservations found yet.
            </div>
          ) : (
            <>
              {/* Mobile cards */}
              <div className="grid gap-4 p-4 md:hidden">
                {reservations.map((r) => (
                  <div
                    key={r.id}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-white">{r.name}</p>
                        <p className="mt-1 text-sm text-white/55">{r.phone}</p>
                      </div>

                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-[11px] font-medium capitalize ${getStatusClasses(
                          r.status
                        )}`}
                      >
                        {r.status}
                      </span>
                    </div>

                    <div className="mt-4 grid gap-3 text-sm text-white/75">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-white/45">Guests</span>
                        <span>{r.guests}</span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-white/45">Table</span>
                        <span>Table {r.table.tableNumber}</span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <span className="text-white/45">Date & Time</span>
                        <span className="max-w-[60%] text-right">
                          {formatDateTime(r.startTime)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop table */}
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full min-w-[780px]">
                  <thead className="bg-white/5">
                    <tr className="text-left text-sm text-white/55">
                      <th className="px-6 py-4 font-medium">Guest</th>
                      <th className="px-6 py-4 font-medium">Guests</th>
                      <th className="px-6 py-4 font-medium">Table</th>
                      <th className="px-6 py-4 font-medium">Date & Time</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {reservations.map((r) => (
                      <tr
                        key={r.id}
                        className="border-t border-white/10 transition hover:bg-white/[0.03]"
                      >
                        <td className="px-6 py-5">
                          <div className="space-y-1">
                            <p className="font-medium text-white">{r.name}</p>
                            <p className="mt-1 text-sm text-white/55">{r.phone}</p>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}