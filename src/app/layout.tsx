import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://beyond-tech.psyverse.fun"),
  title: "Beyond Technology · 技术之上",
  description:
    "An ultra-long-form bilingual archive of the hierarchy of reality — Technology, Science, Mathematics, Information, Computation, Consciousness, Laws of Reality, Existence. Eight layers. One temple.",
  keywords: [
    "philosophy of technology", "hierarchy of reality", "civilization OS", "consciousness", "mathematical universe",
    "It from Bit", "Wolfram physics", "panpsychism", "computational universe", "Tao Te Ching", "Principia",
    "技术哲学", "现实层级", "意识", "数学宇宙", "信息物理",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/", "x-default": "/" } },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Beyond Technology · 技术之上" }],
    title: "Beyond Technology · 技术之上",
    description: "Eight layers of reality, mapped as one interactive bilingual temple.",
    url: "https://beyond-tech.psyverse.fun/",
    siteName: "Psyverse", type: "website",
    locale: "en_US", alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "Beyond Technology",
    description: "Eight layers of reality, mapped as one interactive bilingual temple.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#050608" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@300;400;500;600&family=Noto+Serif+SC:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen overflow-x-hidden">
        <LangProvider>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LangProvider>
        <Script src="https://analytics-dashboard-two-blue.vercel.app/tracker.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
