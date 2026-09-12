import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "João Pedro Alves Santos | Jogos, IA e Backend",
  description:
    "Portfólio de João Pedro Alves Santos: Guardian of Bravantus, IA aplicada, protótipos em Roblox e Unity, backend em C# e TypeScript e arquitetura de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
