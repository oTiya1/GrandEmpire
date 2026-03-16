import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-600/15 bg-black px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
            Grand Empire
          </p>
          <h3 className="mt-4 text-3xl font-semibold text-white">
            Luxury Dining in South London
          </h3>
          <p className="mt-6 max-w-xl text-gray-400 leading-8">
            A refined destination for gourmet burgers, Nigerian classics, and
            elegant intercontinental cuisine served in a premium atmosphere.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Visit</h4>
          <p className="text-gray-400 leading-7">
            108–110 Rushey Green
            <br />
            London, SE6 4HW
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <div className="flex flex-col gap-3 text-gray-400">
            <Link href="/" className="hover:text-yellow-500 transition">
              Home
            </Link>
            <Link href="/menu" className="hover:text-yellow-500 transition">
              Menu
            </Link>
            <Link href="/reserve" className="hover:text-yellow-500 transition">
              Reservation
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-yellow-600/10 pt-6 text-sm text-gray-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Grand Empire. All rights reserved.</p>
        <p>Open Daily: 8:00 AM – 3:00 AM</p>
      </div>
    </footer>
  );
}