import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/utils/font";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ega Erinovian | Web Development from front to back",
  description:
    "DHi, I'm Ega Erinovian, a full-stack web developer skilled in everything from front-end design to back-end development. My portfolio showcases projects built with HTML, CSS, JavaScript, TypeScript, Tailwind, React, Next.js, and Express.js. I’m passionate about crafting responsive, high-performance websites that meet modern business needs.",
  keywords: [
    "Ega Erinovian",
    "web developer",
    "full stack developer",
    "front-end developer",
    "back-end developer",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Express.js",
    "web development",
    "responsive design",
    "web projects",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
