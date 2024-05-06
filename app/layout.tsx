import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baptiste Geffroy ﹒ Software Engineer",
  description: "Dev Frontend Junior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col justify-between">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
