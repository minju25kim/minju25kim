import type { Metadata } from "next";
import "./globals.css";
import { geistSans, geistMono } from '@/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | minju25kim',
    default: 'minju25kim',
  },
  description: 'The official minju25kim website.',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
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
        {children}
      </body>
    </html>
  );
}
