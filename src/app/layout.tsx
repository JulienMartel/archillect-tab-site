import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Archillect Wallpaper",
  description:
    "Sync your iPhone lock screen with Archillect's most recent image.",
  applicationName: "Archillect Wallpaper",
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

  //todo
  twitter: {
    card: "summary_large_image",
    title: "Auto Archillect Wallpapers",
    description:
      "Sync your iPhone lock screen with Archillect's most recent image.",
    creator: "@JU3AG",
    creatorId: "1035428482115940353",
    images: ["/metadata/twitter-card.png"],
  },
  // openGraph: {
  //   title: "Next.js",
  //   description: "The React Framework for the Web",
  //   url: "https://nextjs.org",
  //   siteName: "Next.js",
  //   images: [
  //     {
  //       url: "https://nextjs.org/og.png",
  //       width: 800,
  //       height: 600,
  //     },
  //     {
  //       url: "https://nextjs.org/og-alt.png",
  //       width: 1800,
  //       height: 1600,
  //       alt: "My custom alt",
  //     },
  //   ],
  //   locale: "en-US",
  //   type: "website",
  // },
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
