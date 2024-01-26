import type { Metadata } from "next";
import './ui/fonts';
import { oswald } from '@/app/ui/fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Odyssey Fleet",
  description: "A Star Trek Play by Email Roleplaying Game made by fans, for fans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} antialiased`}>{children}</body>
    </html>
  );
}
