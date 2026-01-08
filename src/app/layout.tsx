import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Labuan Bajo Tours - Petualangan Tak Terlupakan",
  description:
    "Jelajahi keajaiban Labuan Bajo, rumah bagi komodo legendaris, pantai pink yang memukau, dan pemandangan bawah laut yang spektakuler. Pesan tour Anda sekarang!",
  keywords:
    "labuan bajo, komodo, tour, wisata, paket wisata, pantai pink, manta point, padar island",
  openGraph: {
    title: "Labuan Bajo Tours - Petualangan Tak Terlupakan",
    description:
      "Jelajahi keajaiban Labuan Bajo bersama kami. Paket tour lengkap dengan guide profesional.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
