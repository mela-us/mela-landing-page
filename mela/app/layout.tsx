import React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata, Viewport } from "next"
import { ThemeAwareFavicon } from "@/components/theme-aware-favicon"

const inter = Inter({ subsets: ["latin", "vietnamese"], display: "swap" })

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "MELA - Học toán tư duy | Rèn luyện tư duy logic và toán học chuyên sâu",
  description:
    "MELA - Ứng dụng học toán tư duy giúp rèn luyện tư duy logic và kỹ năng toán học chuyên sâu cho mọi lứa tuổi. Với các chủ đề như Đại số, Số học, Hình học, Tư duy và Tổ hợp.",
  keywords:
    "mela, học toán tư duy, nâng cao, tư duy logic, kỹ năng toán học, rèn luyện, toán học chuyên sâu, câu đố, học tập, toán, academy, kiến thức toán, math, mathematics, math academy, math mela, math mela academy, toan, toan tu duy, toan hoc tuy duy, hoc toan tu duy, hoc toan tu duy online, hoc toan tu duy lop 1, hoc toan tu duy lop 2, hoc toan tu duy lop 3, hoc toan tu duy lop 4, hoc toan tu duy lop 5, học toán tư duy lớp 1, học toán tư duy lớp 2, học toán tư duy lớp 3, học toán tư duy lớp 4, học toán tư duy lớp 5, học toán tư duy lớp 6, học toán tư duy lớp 7, học toán tư duy lớp 8, học toán tư duy lớp 9, toan mela, mela online, app mela, mela tu duy toan hoc, nang cao tu duy toan hoc, mela, math elearning application",
  authors: [{ name: "MELA Team" }],
  creator: "MELA Team",
  publisher: "MELA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MELA - Học toán tư duy | Rèn luyện tư duy logic và toán học chuyên sâu",
    description: "Ứng dụng học toán tư duy đột phá, giúp bạn chinh phục toán học một cách dễ dàng và thú vị.",
    url: "https://mela.guru/",
    siteName: "MELA",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/LogoIcon.png",
        width: 1200,
        height: 630,
        alt: "MELA - Học toán tư duy",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mela.guru/",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MELA - Học toán tư duy',
    description: '...',
    images: ['/LogoIcon.png'],
  },
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "MELA",
  "description": "Ứng dụng học toán tư duy...",
  "url": "https://mela.guru/"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange>
          <ThemeAwareFavicon />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
