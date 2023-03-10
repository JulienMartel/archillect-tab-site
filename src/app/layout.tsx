import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Archillect Wallpaper",
  description: "keep your lock screen up to date with archillect",
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
