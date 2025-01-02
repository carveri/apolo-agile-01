import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const geistRoboto = localFont({
  src: "./fonts/GeistRobotoVF.woff",
  variable: "--font-geist-roboto",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Apolo Agile",
  description: "ERP para StartApps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
