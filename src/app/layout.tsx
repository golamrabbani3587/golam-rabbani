import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Golam Rabbani | Senior Software Engineer & Team Lead",
  description:
    "Portfolio of Golam Rabbani — Senior Software Engineer & Team Lead specializing in Node.js, NestJS, React, DevOps, and AI/LLM technologies. Building robust, scalable solutions.",
  keywords: [
    "Golam Rabbani",
    "Senior Software Engineer",
    "Team Lead",
    "Node.js",
    "NestJS",
    "React",
    "DevOps",
    "AI",
    "LLM",
    "Full Stack Developer",
  ],
  authors: [{ name: "Golam Rabbani" }],
  verification: {
    google: "OGU7Y5u719i6v0IK2Ja31vo7dpXawBAHpUkUNp69WjQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} style={{ scrollBehavior: "smooth" }}>
      <body>{children}</body>
    </html>
  );
}
