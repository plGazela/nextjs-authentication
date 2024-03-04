import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Authentication",
  description: "Advanced authentication system made with Next.js and NextAuth.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-EN">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
