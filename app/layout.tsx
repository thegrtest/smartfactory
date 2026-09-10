import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "./site-config";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const themeScript = `
  try {
    const saved = localStorage.getItem("wwbdataautomation-theme");
    const systemDark = matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved === "light" || saved === "dark" ? saved : systemDark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch { document.documentElement.dataset.theme = "light"; }
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Smart factory installation for small manufacturers`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Smart factory systems, installed for you`,
    description: siteConfig.description,
    type: "website",
    url: "/",
    images: [{ url: "/og-menu.png", width: 1536, height: 1024, alt: "Smart factory systems, installed for you" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Smart factory systems, installed for you`,
    description: siteConfig.description,
    images: ["/og-menu.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
