import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arman Patel Portfolio Website ",
  description:
    "This is my portfolio website to showcase my skills and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#07061a] text-AliceBlue">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
