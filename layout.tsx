import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dbSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-db-serif",
  display: "swap",
});

const dbSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-db-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dockbridge Advisory | Commercial advice, handled properly.",
  description:
    "Dockbridge Advisory helps UK businesses make better commercial decisions across energy, water and wider business strategy.",
  metadataBase: new URL("https://dockbridge.co.uk"),
  openGraph: {
    siteName: "Dockbridge Advisory",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dbSerif.variable} ${dbSans.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-ivory text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
