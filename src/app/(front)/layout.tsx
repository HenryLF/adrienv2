import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BACKGROUND_QUERY } from "@/sanity/lib/query";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adrien Milon",
  description: "Portfolio d'Adrien Milon.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const backgroundData = await client.fetch(BACKGROUND_QUERY);

  const backgroundURL =
    backgroundData?.image && urlFor(backgroundData.image).format("webp").url();

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      style={{
        backgroundImage: `url(${backgroundURL})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
        backgroundPositionX: "30%",
        backgroundPositionY: "5%",
        minHeight: "100vh",
      }}
    >
      <Header />
      {children}
    </div>
  );
}
