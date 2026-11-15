import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alkornithm.com"),
  title: {
    default: "ALKORNITHM — Ronnakorn Hompoa",
    template: "%s | ALKORNITHM",
  },
  description:
    "The personal portfolio of Ronnakorn Hompoa — software developer exploring web technologies, computer science, and computer vision. May the bug be with you.",
  openGraph: {
    title: "ALKORNITHM — Ronnakorn Hompoa",
    description:
      "Software development, projects, experiments, and notes. May the bug be with you.",
    url: "https://alkornithm.com",
    siteName: "ALKORNITHM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALKORNITHM — Ronnakorn Hompoa",
    description: "May the bug be with you.",
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
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        jetbrainsMono.variable,
      )}
    >
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
