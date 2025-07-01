import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // add more weights if needed
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tong Bora",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className}  min-h-screen`}>
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
