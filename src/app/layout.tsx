import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Auto Archillect Wallpapers",
  description:
    "Sync your iPhone lock screen with Archillect's most recent image.",
  keywords: [
    "Archillect",
    "Wallpaper",
    "iPhone",
    "Extension",
    "Lock Screen",
    "Lockscreen",
    "Lockscreen Wallpaper",
    "Lock Screen Wallpaper",
  ],
  themeColor: "black",
  colorScheme: "dark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/metadata/site.webmanifest",
  icons: {
    icon: [
      { url: "/metadata/favicon-32x32.png", sizes: "32x32" },
      { url: "/metadata/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: { url: "/metadata/apple-touch-icon.png", sizes: "180x180" },
  },

  twitter: {
    card: "summary_large_image",
    title: "Auto Archillect Wallpapers",
    description:
      "Sync your iPhone lock screen with Archillect's most recent image.",
    creator: "@JU3AG",
    creatorId: "1035428482115940353",
    images: ["/metadata/twitter-card.png"], // try og.png
  },
  openGraph: {
    title: "Auto Archillect Wallpapers",
    description:
      "Sync your iPhone lock screen with Archillect's most recent image.",
    url: "https://jubag.dev",
    siteName: "Auto Archillect Wallpapers",
    images: {
      url: "/metadata/og.png",
      width: 1200,
      height: 630,
    },

    locale: "en-US",
    type: "website",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black text-neutral-100">{children}</body>
    </html>
  );
}
