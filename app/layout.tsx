import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"],variable : "--font-sans" });

export const metadata: Metadata = {
  title: "Nizami movie center",
  description: "Explore a vast collection of movies ranging from the latest blockbusters to timeless classics, all curated to suit your taste. Our intuitive interface allows you to effortlessly browse genres, watch trailers, and read reviews, ensuring you find the perfect film for any mood.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>{children}</body>
    </html>
  );
}
