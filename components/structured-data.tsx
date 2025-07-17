import Script from "next/script"

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "MELA - Học toán tư duy tích hợp AI",
    description: "Rèn luyện tư duy logic và kỹ năng toán học chuyên sâu với sự hỗ trợ của AI cho mọi lứa tuổi.",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Android, iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "VND",
    },
    author: {
      "@type": "Organization",
      name: "MELA Team",
      url: "https://www.mela.guru/about",
    },
    featureList: [
      "Chat AI hỗ trợ giải bài tập theo luồng gia sư",
      "Phân tích đề bài và gợi ý thông minh",
      "Chấm điểm tự động và phản hồi chi tiết",
      "Câu đố toán học đa dạng và thú vị",
      "Học tập thông minh với AI",
    ],
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
