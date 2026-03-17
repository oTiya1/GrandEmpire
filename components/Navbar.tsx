"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/reservation", label: "Reservation" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-yellow-600/20 bg-black/88 backdrop-blur-xl"
            : "bg-black/55 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link href="/" className="flex min-w-0 items-center gap-2.5 md:gap-3">
              <Image
                src="/logo6.png"
                alt="Grand Empire"
                width={44}
                height={44}
                priority
                className="h-10 w-10 object-contain md:h-11 md:w-11"
              />
              <span className="truncate text-[11px] font-semibold tracking-[0.18em] text-yellow-500 sm:text-xs md:text-base md:tracking-[0.2em]">
                GRAND EMPIRE
              </span>
            </Link>

            <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-gray-200 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-yellow-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-yellow-600/30 bg-black/40 text-yellow-500 backdrop-blur-md md:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col px-6 py-6">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="flex min-w-0 items-center gap-2.5"
                  onClick={() => setMenuOpen(false)}
                >
                  <Image
                    src="/logo6.png"
                    alt="Grand Empire"
                    width={44}
                    height={44}
                    className="h-10 w-10 object-contain"
                  />
                  <span className="truncate text-xs font-semibold tracking-[0.18em] text-yellow-500">
                    GRAND EMPIRE
                  </span>
                </Link>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-yellow-600/30 bg-black/40 text-yellow-500"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-3xl font-light uppercase tracking-[0.22em] text-white transition hover:text-yellow-500"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  className="pt-6"
                >
                  <Link
                    href="/reservation"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center justify-center rounded-full bg-yellow-600 px-8 py-4 font-bold text-black transition hover:bg-yellow-500"
                  >
                    Reserve a Table
                  </Link>
                </motion.div>
              </div>

              <div className="text-center text-sm text-gray-400">
                <p>108–110 Rushey Green, London</p>
                <p className="mt-1">Open Daily: 8:00 AM – 3:00 AM</p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}