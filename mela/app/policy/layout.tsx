import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chính sách & Điều khoản | MELA - Học toán tư duy",
  description: "Chính sách bảo mật và điều khoản sử dụng của ứng dụng MELA - Ứng dụng học toán tư duy đột phá.",
  keywords: "mela, chính sách bảo mật, điều khoản sử dụng, học toán tư duy, tư duy logic",
  alternates: {
    canonical: "https://mela.guru/policy",
  },
}

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

