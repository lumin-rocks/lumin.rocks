import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import TopLoader from "@/components/layout/top-loader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

export const viewport: Viewport = {
  themeColor: "#f8bfd4",
};

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: `${SITE_NAME} - Premium Roblox Script Hub`,
  description: `${SITE_NAME} is a premium Roblox script hub supporting Flee the Facility, RIVALS, The Rake REMASTERED, Slime RNG, and more.`,
  keywords: `${SITE_NAME}, lumin, roblox, script hub, best roblox script, flee the facility script, rivals script, the rake remastered script, slime rng script, roblox script 2026, hub, keyless`,
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    images: `${SITE_URL}/brand/icon.png`,
  },
  twitter: {
    card: "summary",
    images: `${SITE_URL}/brand/icon.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/brand/icon.png" />
        <link rel="apple-touch-icon" href="/brand/icon.png" />
      </head>
      <body className={`${inter.variable} ${ibmPlexMono.variable}`}>
        <TopLoader />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
