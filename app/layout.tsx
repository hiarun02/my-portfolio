import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Schema from "./schema";
import { TooltipProvider } from "@/components/ui/tooltip";

// Main font for body text
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Alternative font for headings
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Monospace font for code
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiarun.me"),
  title: {
    default: "Arun's Portfolio",
    template: "%s | Arun Kumar",
  },
  description:
    "Full Stack Web Developer specializing in React, Next.js, TypeScript, Express.js, and Prisma. Available for hire. Building modern web applications.",
  keywords: [
    "Arun Kumar",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Express.js",
    "Prisma",
    "Portfolio",
    "hiarun01",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Arun Kumar", url: "https://hiarun.me" }],
  creator: "Arun Kumar",
  publisher: "Arun Kumar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hiarun.me",
    title: "Arun Kumar - Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, TypeScript, Express.js, and Prisma. Available for hire.",
    siteName: "Arun Kumar Portfolio",
    images: [
      {
        url: "/preview.webp",
        width: 1200,
        height: 630,
        alt: "Arun Kumar - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Kumar - Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, TypeScript, Express.js, and Prisma. Available for hire.",
    creator: "@hiarun01",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Schema />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
