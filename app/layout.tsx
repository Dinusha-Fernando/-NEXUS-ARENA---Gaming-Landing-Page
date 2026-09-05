import type { Metadata } from "next";
import { Orbitron, Rajdhani, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXUS // ARENA — Enter The Next Level | AAA Cyber Esports",
  description: "Enter Nexus Arena, compete with elite players worldwide, climb the competitive leaderboard, and dominate the next generation of tactical cyber-esports.",
  keywords: [
    "NEXUS ARENA",
    "cyber esports",
    "tactical shooter",
    "esports tournament",
    "next-gen gaming",
    "AAA game launch",
    "FPS",
  ],
  authors: [{ name: "NEXUS STUDIOS" }],
  openGraph: {
    title: "NEXUS // ARENA — Enter The Next Level",
    description: "Compete. Evolve. Dominate. A next-generation gaming experience built for players who want more.",
    type: "website",
    locale: "en_US",
    siteName: "NEXUS // ARENA",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXUS // ARENA — Enter The Next Level",
    description: "Compete. Evolve. Dominate. The definitive next-generation competitive cyber arena.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${rajdhani.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="bg-[#050508] text-white font-sans antialiased selection:bg-[#00E5FF] selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
