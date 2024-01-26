import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import clsx from "clsx";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arman Patel Portfolio Website",
  description:
    "This is my portfolio website to showcase my skills and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#100f27]  text-AliceBlue scrollbar-hide">
      <body
        className={clsx(
          urbanist.className,
          " overflow-x-hidden relative min-h-screen"
        )}
      >
        <Header />
        {children}
        <div className="fixed inset-0 max-h-screen -z-50 background-gradient"></div>
        <div className="fixed bg-[url('/image/noise.jpg')] pointer-events-none inset-0 -z-40 h-full w-full   texture mix-blend-soft-light opacity-20 " />
        <Footer/>
      </body>
    </html>
  );
}
