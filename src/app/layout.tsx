import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header} from "@/components/base/Header";
import Footer from "@/components/base/Footer";
import { MainContainer } from "@/components/base/MainContainer";

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Guioliveirx Portfolio",
  description: "Site portfolio feito em React com o framework NextJs em sua versão 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-BR">
      <body className="font-[inter] antialiased bg-gradient-to-r from-sky-300 to-red-300 w-dvh h-dvh flex md:flex-row flex-col xl:justify-center xl:items-center xl:gap-[10px]">
        <Header/>
        <MainContainer>
          {children}
        </MainContainer>
        <Footer />
      </body>
    </html>
  );
}
