import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";
import { WavesBackground } from "@/components/WavesBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Stephanie Lisboa Raab - Front-end Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`h-full ${poppins.variable} ${firaCode.variable}`}>
      <body className="relative">
        {/* canvas de partículas — fica fixo atrás de tudo */}
        <WavesBackground />

        {/* conteúdo da página — z-index > canvas */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}