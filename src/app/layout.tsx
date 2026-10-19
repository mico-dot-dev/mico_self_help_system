import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers/theme-provider";
import { cn } from "@/src/lib/utils";

export const metadata: Metadata = {
  title: "Mico Personal Help System ",
  description: "A self help system for personal growth and development.",
};

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(cormorantGaramond.variable, "font-sans", inter.variable)}
    >
      <body className=" bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
