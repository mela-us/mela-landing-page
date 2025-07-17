import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import StructuredData from "@/components/structured-data"
import Header from "@/components/header"
import FeatureShowcase from "@/components/feature-showcase"
import AppPreviewSlider from "@/components/app-preview-slider"
import CTASection from "@/components/cta-section"
import MathQuestion from "@/components/math-question"

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="relative overflow-hidden">
        {/* Header */ }
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-36 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gray-50 -z-10"></div>
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white to-transparent -z-10"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#002060] to-blue-600 text-white rounded-full text-sm font-medium">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Tích hợp AI thông minh
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-[#002060]">MELA</span>
                    <br />
                    <span className="bg-gradient-to-r from-[#002060] to-blue-600 bg-clip-text text-transparent">
                      Học toán với AI
                    </span>
                  </h1>

                  <p className="text-xl text-gray-700 leading-relaxed pr-3">
                    Rèn luyện tư duy logic và kỹ năng toán học chuyên sâu với sự hỗ trợ của trí tuệ nhân tạo. Tiếp cận hệ thống bài học và bài luyện tập phong phú, Chat với gia sư AI, chấm điểm tự động và thống kê thông minh.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-[#002060] hover:bg-[#001040] text-white"
                  >
                    <Link href="#features">
                      <span className="text-base font-semibold">Khám phá tính năng</span>
                      <ArrowRight className="ml-2 h-7 w-7" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex justify-center items-center">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl blur-2xl opacity-50"></div>
                <div className="relative rounded-3xl overflow-hidden w-[320px] h-[644px] transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/images/homepage.PNG"
                    alt="MELA App"
                    width={320}
                    height={644}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#002060] to-blue-600 text-white rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Cùng nhau tiến bộ
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002060] mb-6">Tính năng nổi bật</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                MELA tích hợp AI thông minh để hỗ trợ học toán hiệu quả, từ chat AI gia sư đến chấm điểm tự động. Trải
                nghiệm học tập hoàn toàn mới với công nghệ tiên tiến.
              </p>
            </div>

            <FeatureShowcase />
          </div>
        </section>

        {/* App Preview Section */}
        <section id="preview" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#002060] to-blue-600 text-white rounded-full text-sm font-medium mb-6">
                <Eye className="h-4 w-4 mr-2" />
                Khám phá ứng dụng
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002060] mb-6">Khám phá MELA</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Xem trước giao diện và tính năng của ứng dụng toán học MELA. Lướt qua các màn hình để khám phá các tính năng nổi bật và trải nghiệm học tập tương tác.
              </p>
            </div>

            <AppPreviewSlider />
          </div>
        </section>

        {/* Interactive Math Question Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#002060] to-blue-600 text-white rounded-full text-sm font-medium mb-6">
                <Eye className="h-4 w-4 mr-2" />
                Tương tác với MELA
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002060] mb-6">Trải nghiệm tương tác</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Hãy thử sức với một câu hỏi toán học từ MELA và cảm nhận cách tương tác với hệ thống của chúng tôi. Bạn có thể chọn đáp án và nhận phản hồi ngay lập tức.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <MathQuestion />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <CTASection />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <Image
                    src="/icons/logo-512.png"
                    alt="MELA Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="font-bold text-2xl">MELA</span>
                </div>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  Ứng dụng học toán tư duy tích hợp AI tại Việt Nam. Giúp bạn chinh phục toán học với sự hỗ trợ
                  của trí tuệ nhân tạo thông minh. Tải ngay để trải nghiệm!
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-6">Liên kết</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                      Trang chủ
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                      Về chúng tôi
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy" className="text-gray-400 hover:text-white transition-colors">
                      Chính sách
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-6">Liên hệ</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <svg className="h-5 w-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span className="text-gray-400">datnmathelearning2025@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} MELA. Tất cả các quyền được bảo lưu.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Điều khoản sử dụng
                </Link>
                <Link href="/policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Chính sách bảo mật
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
