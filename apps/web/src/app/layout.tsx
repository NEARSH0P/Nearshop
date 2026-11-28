import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nearshop",
  description: "Encuentra comercios cercanos que tienen el producto que buscas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="bg-fondo text-texto flex min-h-full flex-col">{children}</body>
    </html>
  );
}
