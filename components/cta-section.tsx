"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Smartphone, Download, EyeIcon } from "lucide-react"
import DownloadPopup from "./download-popup"

export default function CTASection() {
  const [isDownloadPopupOpen, setIsDownloadPopupOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-[#002060] to-blue-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main CTA */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Hãy cùng MELA chinh phục toán học!
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Tải ứng dụng ngay hôm nay và trải nghiệm học toán với sự hỗ trợ của gia sư AI thông minh. Phát triển tư duy
                logic và kỹ năng toán học chuyên sâu một cách hiệu quả nhất có thể.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button
                  size="lg"
                  onClick={() => setIsDownloadPopupOpen(true)}
                  className="bg-white text-[#002060] hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                >
                  <Download className="mr-2 h-6 w-6" />
                  Tải ứng dụng miễn phí
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#002060] font-semibold px-8 py-4 text-lg bg-transparent"
                >
                  <Link href="#preview">
                    <EyeIcon className="mr-2 h-7 w-7" />
                    Xem demo ứng dụng
                  </Link>
                </Button>
              </div>
            </div>

            {/* Device Compatibility */}
            <div className="mt-12 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-white/30 rounded-3xl blur-md"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                  <div className="flex items-center justify-center">
                    <Smartphone className="h-12 w-12 text-white mr-4" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold">Sẵn sàng trên mọi thiết bị</h3>
                      <p className="text-white/90">Trải nghiệm MELA trên các thiết bị di động và máy tính bảng</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DownloadPopup isOpen={isDownloadPopupOpen} onClose={() => setIsDownloadPopupOpen(false)} />
    </>
  )
}
