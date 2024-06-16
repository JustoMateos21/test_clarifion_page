import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { manrope } from "@/fonts/manrope";
  

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clarifion",
  description: "Test assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
