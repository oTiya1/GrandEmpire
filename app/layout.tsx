import "./globals.css";
import Navbar from "@/components/Navbar";
import { Cormorant_Garamond, Inter } from "next/font/google";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Grand Empire | Luxury Dining in London",
  description: "Experience fine dining at Grand Empire, 108–110 Rushey Green, London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}