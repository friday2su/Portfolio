import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ClickParticles from "@/components/ClickParticles";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Friday | Web Developer & Designer",
  description: "Portfolio of a creative developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <CustomCursor />
        <ClickParticles />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
