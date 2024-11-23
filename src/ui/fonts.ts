import localFont from "next/font/local";

export const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff", // Use relative path
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const geistSans = localFont({
  src: "../fonts/GeistVF.woff", // Use relative path
  variable: "--font-geist-sans",
  weight: "100 900",
});