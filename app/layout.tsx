import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_URL = "https://likosertugrul.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ertuğrul Likos | Software Developer & Computer Engineer",
    template: "%s | Ertuğrul Likos",
  },
  description:
    "Ertuğrul Likos — React, React Native ve Next.js ile kullanıcı odaklı uygulamalar geliştiren Bilgisayar Mühendisi. Kişisel portföy sitesi.",
  keywords: [
    "Ertuğrul Likos",
    "Likos Ertuğrul",
    "Ertugrul Likos",
    "Likos Ertugrul",
    "Software Developer",
    "Bilgisayar Mühendisi",
    "React Developer",
    "React Native Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Mobile Developer",
    "Türk Yazılım Geliştirici",
  ],
  authors: [{ name: "Ertuğrul Likos", url: BASE_URL }],
  creator: "Ertuğrul Likos",
  publisher: "Ertuğrul Likos",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Ertuğrul Likos",
    title: "Ertuğrul Likos | Software Developer & Computer Engineer",
    description:
      "Ertuğrul Likos — React, React Native ve Next.js ile kullanıcı odaklı uygulamalar geliştiren Bilgisayar Mühendisi.",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ertuğrul Likos | Software Developer",
    description:
      "React, React Native ve Next.js ile kullanıcı odaklı uygulamalar geliştiren Bilgisayar Mühendisi.",
    creator: "@likosertugrul",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ertuğrul Likos",
  alternateName: ["Likos Ertuğrul", "Ertugrul Likos"],
  url: BASE_URL,
  email: "likosertugrul128@gmail.com",
  jobTitle: "Software Developer & Computer Engineer",
  description:
    "React, React Native ve Next.js ile kullanıcı odaklı uygulamalar geliştiren Bilgisayar Mühendisi.",
  knowsAbout: ["React", "React Native", "Next.js", "TypeScript", "Node.js", "Expo"],
  sameAs: [
    "https://github.com/likosertugrul",
    "https://linkedin.com/in/likosertugrul",
    "https://csreq.likosertugrul.com",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Anti-flash: apply saved theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';var el=document.documentElement;el.classList.add('theme-'+t);if(t!=='light')el.classList.add('dark');}())`,
          }}
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
