import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcoSphere",
  description: "Monitor, Analyze, and Innovate your way to success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'bg-white'}>
      <body className={'bg-white'}>
      <Navbar/>
      <div>
        {children}
      </div>
      <Footer/>
      </body>
    </html>
  );
}
