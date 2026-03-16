import Image from "next/image";
import Link from "next/link";

type EditorialSectionProps = {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
  reverse?: boolean;
};

export default function EditorialSection({
  image,
  eyebrow,
  title,
  text,
  reverse = false,
}: EditorialSectionProps) {
   const isSeafoodPlate = image.includes("dish6");
   
  return (
    <section className="bg-black px-6 py-24">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
        }`}
      >
        <div className="overflow-hidden rounded-3xl border border-yellow-600/20 bg-[#111] shadow-[0_0_40px_rgba(0,0,0,0.35)]">
        <div
            className={`relative w-full ${
              isSeafoodPlate
                ? "aspect-square bg-[#1a1a1a]"
                : "h-[380px] md:h-[340px] lg:h-[390px]"
            }`}
          >
            <Image
              src={image}
              alt={title}
              fill
                 className={
                isSeafoodPlate
                  ? "object-contain p-4 md:p-6"
                  : "object-cover object-center"
              }
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
            {title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">{text}</p>

          <div className="mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full border border-yellow-600/40 px-8 py-4 text-yellow-500 transition hover:bg-yellow-600 hover:text-black"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}