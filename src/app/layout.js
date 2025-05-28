import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NameCardAI - Your Name. Reinvented.",
  description: "AR-enhanced digital business cards that let you share stunning, interactive profiles via QR, NFC, facial recognition, or camera scan—no app required.",
  keywords: "digital business cards, AR business cards, QR code, NFC, networking, professional cards, 3D cards",
  authors: [{ name: "NameCardAI Team" }],
  creator: "NameCardAI",
  publisher: "NameCardAI",
  openGraph: {
    title: "NameCardAI - Your Name. Reinvented.",
    description: "AR-enhanced digital business cards that work everywhere. Connect in 3D. Remember Forever.",
    url: "https://namecardai.com",
    siteName: "NameCardAI",
    images: [
      {
        url: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "NameCardAI - AR Business Cards",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NameCardAI - Your Name. Reinvented.",
    description: "AR-enhanced digital business cards that work everywhere",
    images: ["https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp"],
  },
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
    icon: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
    shortcut: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
    apple: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#00f5ff",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#00f5ff" />
        <meta name="msapplication-TileColor" content="#00f5ff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
