import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata, Viewport } from "next"

const inter = Inter({ subsets: ["latin", "vietnamese"] })

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "MELA - Học toán tư duy | Rèn luyện tư duy logic và toán học chuyên sâu",
  description:
    "MELA - Ứng dụng học toán tư duy giúp rèn luyện tư duy logic và kỹ năng toán học chuyên sâu cho mọi lứa tuổi. Với các chủ đề như Đại số, Số học, Hình học, Tư duy và Tổ hợp.",
  keywords:
    "mela, học toán tư duy, nâng cao, tư duy logic, kỹ năng toán học, rèn luyện, toán học chuyên sâu, câu đố, học tập, toán, academy, kiến thức toán, math, mathematics, math academy, math mela, math mela academy, hoc toan tu duy, hoc toan tu duy online, hoc toan tu duy lop 1, hoc toan tu duy lop 2, hoc toan tu duy lop 3, hoc toan tu duy lop 4, hoc toan tu duy lop 5",
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
  icons: {
    icon: "/LogoIcon.png",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/LogoIcon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/LogoIcon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
