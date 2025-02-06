import type { Metadata } from "next";
// import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import {getLocale, getMessages} from 'next-intl/server';
import { Raleway } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // Normal & Bold
  variable: "--font-raleway", // Use CSS variable
});

export const metadata: Metadata = {
  title: "Litrans",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={raleway.className}>
      <NextIntlClientProvider messages={messages}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Header />
          {children}
        <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
