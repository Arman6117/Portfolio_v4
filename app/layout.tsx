import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import clsx from "clsx";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arman Patel | Full Stack Developer (MERN, Next.js, Node.js)",
  description:
    "Full Stack Developer skilled in React, Next.js, and Node.js. Explore my portfolio showcasing real-world web apps, projects, and experiences.",
  icons: [
    "/favicon/apple-touch-icon.png",
    "/favicon/favicon-32x32.png",
    "/favicon/favicon-16x16.png",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#100f27]  text-AliceBlue scrollbar-hide">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={clsx(
          urbanist.className,
          " overflow-x-hidden relative min-h-screen scrollbar-hide"
        )}
      >
        <Header />
        {children}
        <div className="fixed inset-0 max-h-screen -z-50 background-gradient"></div>
        <div className="fixed bg-[url('/image/noise.jpg')] pointer-events-none inset-0 -z-40 h-full w-full   texture mix-blend-soft-light opacity-20 " />
        <Footer />
      </body>
    </html>
  );
}
