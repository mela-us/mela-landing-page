import React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata, Viewport } from "next"

const inter = Inter({ subsets: ["latin", "vietnamese"], display: "swap" })

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mela.guru'),
  title: "MELA - Ứng dụng học toán tư duy tích hợp AI | Rèn luyện tư duy logic chuyên sâu",
  description:
    "MELA - Ứng dụng học toán tư duy tích hợp AI giúp rèn luyện tư duy logic và kỹ năng toán học chuyên sâu ở mọi lứa tuổi. Với đa dạng các chủ đề như Đại số, Số học, Hình học, Tư duy và Tổ hợp, MELA đem đến kho tàng kiến thức toán học sâu rộng. Chat AI hỗ trợ giải bài tập theo luồng gia sư, phân tích đề bài, gợi ý thông minh và chấm điểm tự động.",
  keywords:
    "mela, học toán tư duy, nâng cao, tư duy logic, kỹ năng toán học, rèn luyện, toán học chuyên sâu, câu đố, học tập, toán, academy, kiến thức toán, math, mathematics, math academy, math mela, math mela academy, toan, toan tu duy, toan hoc tuy duy, hoc toan tu duy, hoc toan tu duy online, hoc toan tu duy lop 1, hoc toan tu duy lop 2, hoc toan tu duy lop 3, hoc toan tu duy lop 4, hoc toan tu duy lop 5, học toán tư duy lớp 1, học toán tư duy lớp 2, học toán tư duy lớp 3, học toán tư duy lớp 4, học toán tư duy lớp 5, học toán tư duy lớp 6, học toán tư duy lớp 7, học toán tư duy lớp 8, học toán tư duy lớp 9, toan mela, mela online, app mela, mela tu duy toan hoc, nang cao tu duy toan hoc, mela, math elearning application, AI học toán, rèn luyện toán, chat AI giải toán, gia sư AI, câu đố toán học, học tập thông minh, toán tiểu học, academy toán, ôn luyện toán",
  authors: [{ name: "MELA Team" }],
  creator: "MELA Team",
  publisher: "MELA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MELA - Ứng dụng học toán tư duy tích hợp AI",
    description: "Ứng dụng học toán tư duy tích hợp AI đột phá, giúp bạn chinh phục toán học với sự hỗ trợ của trí tuệ nhân tạo.",
    url: "https://www.mela.guru/",
    siteName: "MELA",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/icons/favicon.ico",
        width: 1200,
        height: 630,
        alt: "MELA - Ứng dụng học toán tư duy tích hợp AI",
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
    canonical: "https://www.mela.guru/",
  },
  twitter: {
    card: "summary_large_image",
    title: "MELA - Ứng dụng học toán tư duy tích hợp AI",
    description:
      "Ứng dụng học toán tư duy tích hợp AI đột phá, giúp bạn chinh phục toán học với sự hỗ trợ của trí tuệ nhân tạo.",
    images: ["/icons/favicon.ico"],
  },
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "MELA",
  "description": "Ứng dụng học toán tư duy...",
  "url": "https://www.mela.guru/"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon.png" />
        <link rel="icon" type="image/png" href="/icons/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
