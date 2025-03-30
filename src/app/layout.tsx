import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Serif_JP, Quicksand } from "next/font/google";
import "./globals.css";
// import "@/styles/fonts.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// If Winky Sans is not available in next/font/google, use global CSS import
import "@/app/styles/fonts.css"; // (Add Winky Sans manually via CSS)

export const metadata: Metadata = {
  title: "Elential",
  description: "Your Full Stack Solution",
  icons: {
    icon: "/images/icon.ico", // Make sure this file exists in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/images/icon.ico" />
        <link rel="apple-touch-icon" href="/images/icon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerifJP.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
