import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OtherCalculators - Modern Calculation Tools",
    template: "%s | OtherCalculators",
  },
  description: "Simple, beautiful, and powerful calculators for everyday needs.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://othercalculators.com",
    siteName: "OtherCalculators",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Topbar />
        <div className="flex-1">{children}</div>
        <Analytics />
        <Footer />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="u16nzf8qVoWEtj2EMPb/vQ"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
