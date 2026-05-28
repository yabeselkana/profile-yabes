import type { Metadata } from "next";
import { Inconsolata, Poppins } from "next/font/google";
import './global.scss';

const inconsolata = Inconsolata({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yabes Tech Consulting | IT, AI & Web Technology",
  description: "IT and AI technology consulting profile for web platforms, automation workflows, and digital system delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inconsolata.variable} ${poppins.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
