import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mental health africa",
  description:
    "Mental Health Africa is a registered non-governmental organization founded in 2024,committed to raising mental health awareness, reducing stigma, and supporting individuals with mental health challenges across the continent. We believe that there is no health without mental health  and we work tirelessly to champion sustainable development goals while creating a more compassionate and understanding society.",
  keywords: [
    "mental health africa",
    "mental health afr",
    "mental health",
    "MUHAS",
    "mental health NGO",
    "amosi sanga",
    "mental health awareness",
  ],
  creator: "aptech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
