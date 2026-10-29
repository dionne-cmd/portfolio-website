import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dionne Setien | Brand Architect & AI Generalist",
  description:
    "Official portfolio of Dionne Setien — Chief Attention Engineer, Brand Architect, Certified AI Generalist, and Founder of King Luminar Studio & Abund Terra.",
  keywords: [
    "Dionne Setien",
    "Brand Architect",
    "AI Generalist",
    "King Luminar Studio",
    "Abund Terra",
    "Miami Brand Strategist",
    "AI Prompt Engineering",
    "Executive Mindset Coach"
  ],
  authors: [{ name: "Dionne Setien" }],
  openGraph: {
    title: "Dionne Setien | Brand Architect & AI Generalist",
    description:
      "Synthesizing behavioral science, luxury strategy, and technical AI systems to scale operations for founders, creators, and high-end brands.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-putty text-ink antialiased selection:bg-petrol selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
