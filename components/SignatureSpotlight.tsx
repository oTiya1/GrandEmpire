import Image from "next/image";
import Link from "next/link";

export default function SignatureSpotlight() {
  return (
    <section className="px-6 py-24 bg-[#0d0d0d]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-yellow-600/20 bg-black">
          <Image
            src="/dish51.jpg"
            alt="Grand Empire signature dish"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
            Signature Spotlight
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white leading-tight">
           Designed to Impress, Crafted to Remember
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
          At Grand Empire, we believe a meal is more than just sustenance—it is a choreographed performance. We understand that the eyes feast before the palate, which is why we treat every dish with the reverence it deserves. Our kitchen blends the soul of traditional cooking with the polish of fine dining, delivering bold flavors in a setting of unmatched elegance. At Grand Empire, Excellence is served everyday. Join us for a journey of taste where every detail—from the plating to the service—is designed to leave a lasting impression.
          </p>

          <div className="mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-yellow-600 px-8 py-4 font-bold text-black transition hover:bg-yellow-500"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}