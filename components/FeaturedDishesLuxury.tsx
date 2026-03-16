import Image from "next/image";
import Link from "next/link";

export default function FeaturedDishesLuxury() {
  return (
    <section className="px-6 py-24 bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
            Featured Plates
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white">
            A visual taste of Grand Empire
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 overflow-hidden rounded-3xl border border-yellow-600/20 bg-[#111] shadow-[0_0_40px_rgba(0,0,0,0.35)]">
            <div className="group overflow-hidden">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.18),transparent_60%)]" />
              <div className="absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent_20%,rgba(234,179,8,0.12)_50%,transparent_80%)]" />
              <Image
                src="/dish1211.jpg"
                alt="Jollof Rice & Chicken"
                width={1400}
                height={1000}
                className="h-[320px] md:h-[380px] lg:h-[430px] w-full object-cover object-[center_62%] scale-110 transition-transform duration-700 ease-out group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            </div>

            <div className="p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
                Signature Favourite
              </p>
              <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
                Jollof Rice & Chicken
              </h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                A beautifully presented classic with richness, aroma, and unmistakable character. Smoky, Bold and Unapologetically flavorful. It's not just a meal, it's a Lifestyle.
              </p>

              <div className="mt-8">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center rounded-full border border-yellow-600/40 px-8 py-4 text-yellow-500 transition hover:bg-yellow-600 hover:text-black"
                >
                  View Full Menu
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            <div className="group overflow-hidden rounded-3xl border border-yellow-600/20 bg-[#111] shadow-[0_0_40px_rgba(0,0,0,0.35)]">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.18),transparent_60%)]" />
              <div className="absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent_20%,rgba(234,179,8,0.12)_50%,transparent_80%)]" />
                <Image
                  src="/dish2.jpg"
                  alt="SeaFood Okra"
                  width={900}
                  height={700}
                  className="h-[210px] md:h-[230px] w-full object-cover object-center scale-110 transition-transform duration-700 ease-out group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-yellow-500">
                  SeaFood Okra
                </h3>
                <p className="mt-3 leading-7 text-gray-300">
                 The Ultimate "land meets Sea" masterpiece. A glistening stew with a treasure trove of jumbo prawns, crab claws and flaky white fish.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-yellow-600/20 bg-[#111] shadow-[0_0_40px_rgba(0,0,0,0.35)]">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.18),transparent_60%)]" />
              <div className="absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent_20%,rgba(234,179,8,0.12)_50%,transparent_80%)]" />
                <Image
                  src="/dish31.jpg"
                  alt="Empire Signature Burger"
                  width={900}
                  height={700}
                  className="h-[210px] md:h-[230px] w-full object-cover object-center scale-110 transition-transform duration-700 ease-out group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-yellow-500">
                  Empire Signature Burger
                </h3>
                <p className="mt-3 leading-7 text-gray-300">
                  A rich and indulgent burger experience layered with bold flavour,
                  premium ingredients, and the distinctive Grand Empire touch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}