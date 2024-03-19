import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import "@/styles/tailwind.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Deepak Prajapati - Software engineer, blockchain developer.",
  description: "Portfolio website",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </>
      </body>
    </html>
  );
}
