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
  const thisYear = new Date().getFullYear()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* add grid here */}
        {children}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          {thisYear} @minju25kim
        </footer>
      </body>
    </html>
  );
}
