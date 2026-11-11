import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.fullTitle} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.fullTitle}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.fullTitle,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "ko_KR",
    url: siteConfig.siteUrl,
    siteName: siteConfig.fullTitle,
    title: `${siteConfig.fullTitle} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/profile.jpg",
        width: 640,
        height: 960,
        alt: `${siteConfig.fullTitle} 프로필 사진`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullTitle} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/profile.jpg"],
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
  verification: {
    google: siteConfig.verification.google || undefined,
    other: siteConfig.verification.naver
      ? { "naver-site-verification": siteConfig.verification.naver }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.siteUrl}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        description: siteConfig.description,
        url: siteConfig.siteUrl,
        image: `${siteConfig.siteUrl}/profile.jpg`,
        ...(siteConfig.email ? { email: `mailto:${siteConfig.email}` } : {}),
        ...(siteConfig.youtubeUrl ? { sameAs: [siteConfig.youtubeUrl] } : {}),
        knowsAbout: [
          "법인 컨설팅",
          "법인 재무구조",
          "경영 리스크 관리",
          "대표 개인 자산관리",
          "가업승계",
          "절세 전략",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.siteUrl}/#service`,
        name: siteConfig.fullTitle,
        description: siteConfig.description,
        url: siteConfig.siteUrl,
        image: `${siteConfig.siteUrl}/profile.jpg`,
        founder: { "@id": `${siteConfig.siteUrl}/#person` },
        areaServed: "KR",
      },
    ],
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
