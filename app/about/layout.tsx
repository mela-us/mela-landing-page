import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Về chúng tôi | MELA - Học toán tư duy",
  description:
    "Tìm hiểu về đội ngũ phát triển MELA - Ứng dụng học toán tư duy đột phá giúp rèn luyện tư duy logic và kỹ năng toán học chuyên sâu.",
  keywords: "mela, đội ngũ phát triển, về chúng tôi, học toán tư duy, tư duy logic, toán học chuyên sâu",
  alternates: {
    canonical: "https://www.mela.guru/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

