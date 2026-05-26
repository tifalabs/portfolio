import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import "nes.css/css/nes.min.css";
import { Footer, Header, LabMascot } from "@/components/ui";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tifa Labs | Retro Code Archive",
  description: "Retro 8-bit portfolio for Tifa Labs projects.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pressStart2P.className}>
        <Header />
        {children}
        <LabMascot />
        <Footer />
      </body>
    </html>
  );
}