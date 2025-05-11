import type { Metadata } from "next";

import { mailSansRoman } from "@/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hydrogen Card – No Maintenance Fee | Modern Card Payment Experience",
  description:
    "Get a Hydrogen Visa card with no maintenance fee. Enjoy a seamless, secure, and modern card payment experience. Request your card, manage payments, and more—all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mailSansRoman.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
