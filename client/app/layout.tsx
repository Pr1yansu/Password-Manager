import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import StoreProvider from "@/Provider/store-provider";

import "./globals.css";

const montserrat = Montserrat({
  style: ["italic", "normal"],
  subsets: ["latin-ext"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  adjustFontFallback: true,
  fallback: ["Helvetica Neue", "sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Password Manager",
  description: "A simple password manager",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen bg-gradient-to-br dark:from-background dark:to-zinc-800 from-blue-100 to-blue-40">
              {children}
            </main>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
