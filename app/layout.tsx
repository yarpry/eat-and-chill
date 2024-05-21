import "../public/css/mapsjs-ui.css";
import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

import HereMapScript from "@/app/components/scripts/HereMapScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eat And Chill",
  description: "Find the best places to eat and chill in your city",
  icons: {
    icon: "./favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <HereMapScript />
        </body>
      </html>
    </>
  );
}
