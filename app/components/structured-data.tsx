import Script from "next/script"

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "MELA - Học toán tư duy",
    description: "Rèn luyện tư duy logic và kỹ năng toán học chuyên sâu cho mọi lứa tuổi.",
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
      url: "https://mela.guru/about",
    }
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

