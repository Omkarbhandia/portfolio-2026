import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import BackgroundMesh from "@/components/ui/BackgroundMesh";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Omkar Bhandia // Product Engineer",
  description: "Senior Web Architect specializing in React, Next.js, and modern bleeding-edge technologies.",
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
};

import TabIdentity from "@/components/ui/TabIdentity";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth cursor-default">
      <body
        className={`${inter.variable} ${interTight.variable} ${jetBrainsMono.variable} antialiased overflow-x-hidden bg-obsidian`}
        style={{ isolation: "isolate" }}
      >
        <TabIdentity />
        <BackgroundMesh />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
