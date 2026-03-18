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

export default function MenuPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/gallery4.jpg"
          alt="Grand Empire menu background"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/52 to-black/65" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 pt-24 pb-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
              Explore
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-tight text-white md:text-6xl">
              Our Current
              <span className="block text-yellow-500">Restaurant Menu</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Explore Grand Empire’s current selection of starters, burgers,
              wraps, seafood, rice dishes, soups, fish dishes, desserts and more.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/reservation"
                className="inline-flex items-center justify-center rounded-full bg-yellow-600 px-8 py-4 font-bold text-black transition hover:bg-yellow-500"
              >
                Reserve a Table
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-yellow-600/40 px-8 py-4 text-yellow-500 transition hover:bg-yellow-600 hover:text-black"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="sticky top-[72px] z-30 border-b border-yellow-600/10 bg-black/85 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto">
          {menuSections.map((section) => (
            <a
              key={section.title}
              href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="whitespace-nowrap rounded-full border border-yellow-600/25 px-5 py-2 text-sm uppercase tracking-[0.2em] text-gray-200 transition hover:bg-yellow-600 hover:text-black"
            >
              {section.title}
            </a>
          ))}
        </div>
      </section>

      {/* MENU SECTIONS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl space-y-20">
          {menuSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="scroll-mt-36"
            >
              <div className="mb-10">
                <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
                  {sectionIndex + 1 < 10 ? `0${sectionIndex + 1}` : sectionIndex + 1}
                </p>
                <h2 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
                  {section.title}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {section.items.map(([name, price]) => (
                  <div
                    key={name}
                    className="rounded-3xl border border-yellow-600/15 bg-[#111]/95 p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/35 hover:shadow-[0_0_30px_rgba(234,179,8,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-medium text-yellow-500">
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
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-yellow-600/15 bg-[#0d0d0d] px-8 py-14 text-center shadow-[0_0_50px_rgba(0,0,0,0.35)] md:px-14">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
            Grand Empire Experience
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Elegant dining, bold flavour, memorable nights
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Reserve your table and enjoy Grand Empire’s current menu in a warm,
            stylish, and unforgettable setting in South London.
          </p>

          <div className="mt-10">
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center rounded-full bg-yellow-600 px-10 py-4 font-bold text-black transition hover:bg-yellow-500"
            >
              Book Your Table
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}