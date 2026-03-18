import Image from "next/image";
import Link from "next/link";

const menuSections = [
  {
    title: "Starters",
    items: [
      ["Assorted Meat Pepper Soup", "£15.00"],
      ["Spring Roll", "£10.00"],
      ["Beef Suya", "£15.00"],
      ["Chicken Suya", "£15.00"],
      ["Asun (Garnished Goat Meat)", "£15.00"],
      ["Tilapia Fish Pepper Soup", "£20.00"],
      ["Catfish Pepper Soup", "£20.00"],
      ["Peppered Snails", "£30.00"],
      ["Nkwobi Cow Foot", "£15.00"],
      ["Isi-Ewu (Goat Head)", "£30.00"],
      ["Marinated Spicy Gizzard", "£15.00"],
      ["Spicy Turkey", "£15.00"],
    ],
  },
  {
    title: "Burgers & Wraps",
    items: [
      ["Beef Burger", "£10.00"],
      ["Double Beef Burger", "£15.00"],
      ["Empire Signature Double Beef Burger and Chips", "£20.00"],
      ["Chicken Sharwama", "£13.00"],
      ["Chicken Shawarma and Chips", "£20.00"],
      ["Turzo Beef Sharwama and Chips", "£20.00"],
    ],
  },
  {
    title: "Chicken Lickin",
    items: [
      ["Spicy Chicken Wings (10)", "£10.00"],
      ["Honey Glazed Chicken Wings (10)", "£15.00"],
      ["Chicken Wings and Chips", "£30.00"],
      ["Whole Grilled Chicken with Pepper Sauce", "£20.00"],
      ["Whole Chicken & Jollof Rice, Plantain & Salad", "£35.00"],
      ["Whole Chicken & Fried Rice, Plantain & Salad", "£35.00"],
      ["Whole Chicken & Plantain & Yam", "£30.00"],
      ["Whole Chicken & Chips", "£30.00"],
    ],
  },
  {
    title: "Mega Platters – Feeds 3-4",
    items: [
      ["Beef Suya, Spicy Turkey, Chicken Wings, Jollof Rice, Plantain", "£80.00"],
      ["Chicken Suya, Beef Suya, Chicken Wings, Asun, Jollof, Fried Rice, Plantain", "£100.00"],
      ["Chicken Wings Platter with Yam and Plantain", "£40.00"],
      ["Chicken Wings, Suya, Plantain, Yam, Salad Platter", "£60.00"],
      ["XL Tilapia Platter with Plantain, Yam, Jollof Rice, Fried Rice", "£110.00"],
      ["Chicken Wings, Honey Wings and Suya with Yam, Plantain and Chips", "£80.00"],
    ],
  },
  {
    title: "Sea Food",
    items: [
      ["Royal Ocean Boil (Feeds 3-4)", "£110.00"],
      ["Empire Mixed Boil", "£60.00"],
      ["Snow Crab and Prawn Feast", "£60.00"],
    ],
  },
  {
    title: "Rice Dishes",
    items: [
      ["Jollof/Fried/White Rice with Fried Plantain and Fried Fish", "£23.00"],
      ["Jollof/Fried/White Rice with Fried Plantain, Chicken and Beef", "£23.00"],
      ["Jollof/Fried/White Rice with Fried Plantain and Beef", "£23.00"],
      ["Jollof/Fried/White Rice with Fried Plantain and Assorted Meat", "£23.00"],
      ["Ayamase served with White Rice", "£25.00"],
      ["Asaro (Yam Porridge) served with Assorted Meat", "£30.00"],
      ["Asaro served with Fried Fish and Plantain", "£35.00"],
      ["Gizzard, Fried Fish and Plantain (Gizdodo)", "£40.00"],
      ["Pineapple Fried Rice with Butter Shrimps and Plantain", "£50.00"],
    ],
  },
  {
    title: "Soups",
    items: [
      ["Egusi / Ogbono / Oha / Bitter-Leaf / Okro / Eforiro with Assorted Meat", "£25.00"],
      ["Egusi / Ogbono / Oha / Bitter-Leaf / Okro / Eforiro with Chicken & Beef", "£25.00"],
      ["Egusi / Ogbono / Oha / Bitter-Leaf / Okro / Eforiro with Fried Fish", "£25.00"],
      ["Egusi / Ogbono / Oha / Bitter-Leaf / Okro / Eforiro with Stock Fish", "£25.00"],
      ["Egusi / Ogbono / Oha / Bitter-Leaf / Okro / Eforiro with Assorted & Stockfish", "£35.00"],
      ["Sea Food Okro", "£40.00"],
      ["Sea Food Egusi", "£40.00"],
    ],
  },
  {
    title: "Fish Dishes",
    items: [
      ["Whole Grilled Fish served with Jollof Rice", "£30.00"],
      ["Whole Grilled Fish served with Fried Rice", "£30.00"],
      ["Whole Grilled Fish with Plantain & Side Salad", "£30.00"],
      ["Whole Grilled Fish with Fried Yam & Side Salad", "£30.00"],
      ["Whole Grilled Fish with Chips & Side Salad", "£30.00"],
      ["Tilapia with Plantain & Fried Yam or Mix", "£40.00"],
      ["XL Large Tilapia with Yam, Plantain & Side Salad", "£50.00"],
      ["XXL Large Tilapia with Yam/Plantain or Mix of Both", "£60.00"],
      ["XXXL Large Tilapia with Yam/Plantain or Mix of Both", "£70.00"],
    ],
  },
  {
    title: "Extra Portions",
    items: [
      ["Extra Beef, Chicken or Assorted Meat", "£10.00"],
      ["Stock Fish", "£15.00"],
      ["Extra Fried Fish", "£10.00"],
      ["Extra Fried Yam or Plantain", "£10.00"],
      ["Extra Semolina, Pounded Yam and Amala", "£6.00"],
      ["Extra Egusi, Ogbono, Eforiro, Oha", "£10.00"],
      ["Extra Okro, Bitterleaf", "£10.00"],
      ["Extra Edikanikong", "£15.00"],
      ["Extra White Rice, Jollof Rice, Fried Rice", "£10.00"],
      ["Extra Asaro (Yam Porridge)", "£15.00"],
      ["Extra Fish Sauce", "£5.00"],
      ["Extra Ayamase", "£15.00"],
      ["Extra Chips", "£10.00"],
      ["Extra Beans", "£10.00"],
    ],
  },
  {
    title: "Desserts",
    items: [
      ["Empire Ice-Cream Vanilla or Strawberry", "£10.00"],
      ["Empire Fried Ice-Cream", "£15.00"],
    ],
  },
];

function sectionId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function MenuPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[60vh] overflow-hidden md:min-h-[70vh]">
        <Image
          src="/gallery4.jpg"
          alt="Grand Empire menu background"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/45 to-black/65" />

        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 pb-12 pt-20 sm:px-6 md:min-h-[70vh] md:pb-16 md:pt-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-500 sm:text-sm sm:tracking-[0.35em]">
              Explore
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Our Current
              <span className="block text-yellow-500">Restaurant Menu</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Explore Grand Empire’s current selection of starters, burgers,
              wraps, seafood, rice dishes, soups, fish dishes, desserts and
              more.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
              <Link
                href="/reservation"
                className="inline-flex items-center justify-center rounded-full bg-yellow-600 px-7 py-3.5 text-sm font-bold text-black transition hover:bg-yellow-500 sm:px-8 sm:py-4"
              >
                Reserve a Table
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-yellow-600/40 px-7 py-3.5 text-sm text-yellow-500 transition hover:bg-yellow-600 hover:text-black sm:px-8 sm:py-4"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="sticky top-[56px] z-30 border-b border-yellow-600/10 bg-black/90 px-4 py-3 backdrop-blur-xl sm:px-6 md:top-[64px]">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {menuSections.map((section) => (
            <a
              key={section.title}
              href={`#${sectionId(section.title)}`}
              className="whitespace-nowrap rounded-full border border-yellow-600/25 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-gray-200 transition hover:bg-yellow-600 hover:text-black sm:px-5 sm:text-sm sm:tracking-[0.2em]"
            >
              {section.title}
            </a>
          ))}
        </div>
      </section>

      {/* MENU SECTIONS */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl space-y-14 sm:space-y-16 md:space-y-20">
          {menuSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              id={sectionId(section.title)}
              className="scroll-mt-28 md:scroll-mt-36"
            >
              <div className="mb-8 sm:mb-10">
                <p className="text-xs uppercase tracking-[0.3em] text-yellow-500 sm:text-sm sm:tracking-[0.35em]">
                  {sectionIndex + 1 < 10 ? `0${sectionIndex + 1}` : sectionIndex + 1}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                  {section.title}
                </h2>
              </div>

              {/* MOBILE STACKED CARDS */}
              <div className="grid gap-4 md:hidden">
                {section.items.map(([name, price]) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-yellow-600/15 bg-[#111]/95 p-4"
                  >
                    <div className="flex flex-col gap-3">
                      <h3 className="text-base font-medium leading-7 text-yellow-500">
                        {name}
                      </h3>
                      <span className="inline-flex w-fit rounded-full border border-yellow-600/25 px-3 py-1 text-sm font-semibold text-white">
                        {price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* DESKTOP GRID */}
              <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
                {section.items.map(([name, price]) => (
                  <div
                    key={name}
                    className="rounded-3xl border border-yellow-600/15 bg-[#111]/95 p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/35 hover:shadow-[0_0_30px_rgba(234,179,8,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="min-w-0 text-2xl font-medium leading-8 text-yellow-500">
                        {name}
                      </h3>
                      <span className="shrink-0 rounded-full border border-yellow-600/25 px-4 py-1 text-sm font-semibold text-white">
                        {price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-yellow-600/15 bg-[#0d0d0d] px-5 py-12 text-center shadow-[0_0_50px_rgba(0,0,0,0.35)] sm:px-8 sm:py-14 md:px-14">
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-500 sm:text-sm sm:tracking-[0.35em]">
            Grand Empire Experience
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Elegant dining, bold flavour, memorable nights
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Reserve your table and enjoy Grand Empire’s current menu in a warm,
            stylish, and unforgettable setting in South London.
          </p>

          <div className="mt-8 sm:mt-10">
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center rounded-full bg-yellow-600 px-8 py-3.5 text-sm font-bold text-black transition hover:bg-yellow-500 sm:px-10 sm:py-4"
            >
              Book Your Table
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}