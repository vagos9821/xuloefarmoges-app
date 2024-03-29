import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Image from "logo-white.png";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ξυλοεφαρμογές",
  description: "Generated by create next app",
  icons: {
    icon: "/logo-white.png", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
      {/* add this */}
      <head>
        <link rel="icon" href="/logo-white.png" />
      </head>
      <body className={`${inter.className} scroll-smooth `}>
        <Navbar />
        <div className="h-[80px]"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
