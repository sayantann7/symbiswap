import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SymbiSwap",
  description: `SymbiSwap is a unique barter-based marketplace for SIT students to
          exchange skills, notes, and assignments—no money involved! Post gigs,
          collaborate with peers, earn ratings, and unlock achievement badges
          while building a strong academic network. Swap skills and build bonds!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/pagedone@1.2.2/src/js/pagedone.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
