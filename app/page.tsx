import Image from "next/image";
import Link from "next/link";

import EditorialSection from "@/components/EditorialSection";
import FeaturedDishesLuxury from "@/components/FeaturedDishesLuxury";
import ParallaxSection from "@/components/ParallaxSection";
import SignatureSpotlight from "@/components/SignatureSpotlight";
import GalleryLightbox from "@/components/GalleryLightBox";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
{/* HERO */}
<section className="relative min-h-screen overflow-hidden pt-20 md:pt-24 lg:pt-38">
  <video
    autoPlay
    muted
    loop
    playsInline
    tabIndex={-1}
    aria-hidden="true"
    className="absolute inset-0 h-full w-full object-cover hero-video-zoom pointer-events-none select-none"
  >
    <source src="/hero-video.mp4" type="video/mp4" />
  </video>

  <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-6">
    <div className="grid w-full items-center gap-12 lg:grid-cols-2">
      {/* HERO TEXT */}
      <div className="hero-animate relative z-30 pointer-events-auto flex flex-col items-center text-center lg:items-start lg:text-left">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-yellow-500 md:text-sm">
          Luxury Dining • South London
        </p>

        <h1 className="text-5xl font-light leading-[1.05] text-yellow-500 md:text-7xl">
          Fine Dining
          <span className="block text-white">Reimagined</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
          Grand Empire blends gourmet burgers, authentic Nigerian classics,
          and elegant intercontinental cuisine into one refined dining
          experience in London.
        </p>

        <div className="relative z-40 mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <Link
            href="/reservation"
            className="pointer-events-auto inline-flex min-w-[220px] items-center justify-center rounded-full bg-yellow-600 px-8 py-4 font-bold text-black shadow-[0_0_30px_rgba(234,179,8,0.35)] transition hover:bg-yellow-500"
          >
            Imperial Standard
          </Link>

          <Link
            href="/menu"
            className="pointer-events-auto inline-flex min-w-[220px] items-center justify-center rounded-full border border-yellow-600/40 px-8 py-4 text-yellow-500 backdrop-blur-md transition hover:bg-yellow-600 hover:text-black"
          >
            Exquisite Flavours
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-sm text-gray-300 sm:flex-row sm:gap-8">
          <span>Open Daily: 8:00 AM – 3:00 AM</span>
          <span>108–110 Rushey Green, London</span>
        </div>
      </div>

      {/* HERO LOGO */}
      <div className="pointer-events-none flex justify-center lg:justify-end">
        <Image
          src="/logo6.png"
          alt="Grand Empire"
          width={520}
          height={520}
          priority
          className="logo-glow h-auto w-[260px] md:w-[340px] lg:w-[420px]"
        />
      </div>
    </div>
  </div>
</section>

      {/* EDITORIAL STORY SECTION */}
      <EditorialSection
        image="/dish6.jpg"
        eyebrow="A Refined Experience"
        title="Luxury dining shaped by flavour, culture, and atmosphere"
        text="At Grand Empire, every visit is designed to feel memorable. From rich Nigerian classics to premium burgers and elegant intercontinental plates, we bring together bold taste, beautiful presentation, and a warm upscale atmosphere."
      />


      {/* FEATURED DISHES */}
      <FeaturedDishesLuxury />


      {/* SECOND EDITORIAL SECTION */}
      <EditorialSection
        image="/interior1.jpg"
        eyebrow="Atmosphere"
        title="Crafted for intimate dinners, celebrations, and late-night dining"
        text="Grand Empire is more than a restaurant — it is a setting for meaningful moments. Whether joining us for a quiet dinner, social evening, or celebration, every detail is designed to feel refined and welcoming."
        reverse
      />


      {/* PARALLAX EXPERIENCE */}
      <ParallaxSection
        image="/dish4.jpg"
        title="Crafted for Luxury"
        text="Every plate at Grand Empire is designed to deliver elegance, flavour, and a memorable fine-dining experience from the first glance to the final bite."
      />


      {/* SIGNATURE SPOTLIGHT */}
      <SignatureSpotlight />


      {/* GALLERY */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
              Gallery
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white">
              Inside the Grand Empire experience
            </h2>

          </div>

          <GalleryLightbox />

        </div>
      </section>


      {/* LOCATION */}
<section className="px-6 py-24 bg-[#0a0a0a]">
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
        Visit Us
      </p>
      <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white">
        Join us in South London
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
        Experience Grand Empire in a warm, stylish setting designed for intimate
        dinners, celebrations, and memorable late-night dining.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.35fr]">
      <div className="rounded-3xl border border-yellow-600/20 bg-[#111] p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.35)]">
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-500">
              Address
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-300">
              108–110 Rushey Green
              <br />
              London, SE6 4HW
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-500">
              Opening Hours
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-300">
              Open Daily
              <br />
              8:00 AM – 3:00 AM
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-500">
              Reservations
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-300">
              Reserve your table online for a smooth and elegant dining experience or contact us directly on WhatsApp.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center rounded-full bg-yellow-600 px-8 py-4 font-bold text-black transition hover:bg-yellow-500"
            >
              Book A Table
            </Link>
            <a
    href="https://wa.me/447000000000?text=Hello%20Grand%20Empire%2C%20I%20would%20like%20to%20make%20a%20booking."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-green-600"
  >
    WhatsApp Us
  </a>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-yellow-600/20 shadow-[0_0_40px_rgba(0,0,0,0.35)]">
        <iframe
          src="https://www.google.com/maps?q=108-110+Rushey+Green,+London,+SE6+4HW&output=embed"
          className="h-[420px] md:h-[520px] w-full"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>


      {/* FOOTER */}
      <Footer />

    </main>
  );
}