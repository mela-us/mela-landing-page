"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Download, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { DownloadPopup } from "./components/download-popup"
import StructuredData from "./components/structured-data"

const MathQuestion = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const correctAnswer = "15"

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const checkAnswer = () => {
    setShowResult(true)
  }

  const resetQuestion = () => {
    setSelectedAnswer(null)
    setShowResult(false)
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-1000">Câu hỏi mẫu:</h3>
          <p className="text-lg text-gray-800">Tính tổng các số từ 1 đến 5.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {["10", "15", "20", "25"].map((answer) => (
            <button
              key={answer}
              onClick={() => handleSelectAnswer(answer)}
              disabled={showResult}
              className={`p-4 rounded-lg border transition-all ${
                selectedAnswer === answer
                  ? "border-[#002060] bg-[#002060]/5"
                  : "border-gray-200 hover:border-[#002060] hover:bg-[#002060]/5"
              } ${showResult && answer === correctAnswer ? "bg-emerald-50 border-emerald-200" : ""}`}
            >
              <span className={`font-medium ${selectedAnswer === answer ? "text-[#002060]" : "text-gray-700"}`}>
                {answer}
              </span>
            </button>
          ))}
        </div>

        {!showResult && selectedAnswer && (
          <Button
            onClick={checkAnswer}
            className="text-white w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
          >
            Kiểm tra đáp án
          </Button>
        )}

        {showResult && (
          <div className="space-y-4">
            {selectedAnswer === correctAnswer ? (
              <div className="bg-gradient-to-br from-emerald-100 to-green-100 border border-emerald-200 rounded-xl p-6 text-emerald-800">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-emerald-200 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-bold text-lg">Chính xác! Bạn làm rất tốt.</p>
                </div>
                <p className="text-sm ml-11 text-emerald-800">1 + 2 + 3 + 4 + 5 = 15</p>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-rose-100 to-red-100 border border-rose-200 rounded-xl p-6 text-rose-800">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-rose-200 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="font-bold text-lg">Chưa chính xác!</p>
                </div>
                <p className="text-sm ml-11 text-rose-800">Đáp án đúng là: 15</p>
                <p className="text-sm ml-11 text-rose-800">1 + 2 + 3 + 4 + 5 = 15</p>
              </div>
            )}

            <Button 
              onClick={resetQuestion} 
              variant="outline" 
              className="text-dark w-full bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 transition-all duration-200"
            >
              Làm lại
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const [isDownloadPopupOpen, setIsDownloadPopupOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0.1, 0.2], [1, 0.9])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <StructuredData />
      <div className="relative overflow-hidden">
        {/* Header */}
        {!isMobileMenuOpen && (<header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/LogoIcon.png"
                  alt="MELA Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="font-bold text-2xl text-[#002060]">
                  MELA
                </span>
              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                  Trang chủ
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                  Về chúng tôi
                </Link>
                <Link href="/policy" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                  Chính sách
                </Link>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => {
                      setIsDownloadPopupOpen(true)
                      setIsMobileMenuOpen(false)
                    }}
                    className="text-white bg-[#002060] hover:bg-[#001a4d]"
                  >
                    Tải ứng dụng
                  </Button>
                </div>
              </nav>
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                  <span className="sr-only">Open menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </header>)}

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <div className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/LogoIcon.png"
                    alt="MELA Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="font-bold text-2xl text-[#002060]">
                    MELA
                  </span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </Button>
              </div>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Trang chủ
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Về chúng tôi
                </Link>
                <Link
                  href="/policy"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Chính sách
                </Link>
                <Button
                  onClick={() => {
                    setIsDownloadPopupOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 mt-4"
                >
                  Tải ứng dụng
                </Button>
              </nav>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 -z-10"></div>
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white to-transparent -z-10"></div>

          <motion.div style={{ opacity, scale }} className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent pb-2">
                    MELA - Khám phá tiềm năng toán học của bạn!
                  </h1>
                  <p className="mt-6 text-lg md:text-xl text-gray-700">
                    Ứng dụng học toán tư duy đột phá, giúp bạn chinh phục toán học một cách dễ dàng và thú vị.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => setIsDownloadPopupOpen(true)}
                    className="bg-gradient-to-r from-purple-600 text-white to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Tải ứng dụng ngay
                  </Button>
                  <Button 
                    onClick={() => scrollToSection(aboutRef)}
                    variant="outline" 
                    size="lg"
                  >
                    Tìm hiểu thêm
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                <div className="relative rounded-3xl overflow-hidden w-[320px] h-[644px] transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/Mela.png"
                    alt="MELA App"
                    width={320}
                    height={644}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
            <button
              onClick={() => scrollToSection(featuresRef)}
              className="animate-bounce bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronDown className="h-6 w-6 text-purple-600" />
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Tính năng nổi bật
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                MELA cung cấp đầy đủ công cụ để bạn học toán hiệu quả, từ bài giảng chi tiết đến hỗ trợ AI thông minh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Bài giảng chi tiết, dễ hiểu",
                  description: "Nội dung được trình bày rõ ràng, dễ hiểu với nhiều ví dụ minh họa sinh động.",
                  icon: "📚",
                },
                {
                  title: "Bài tập đa dạng",
                  description: "Từ cơ bản đến nâng cao, có lời giải chi tiết giúp bạn hiểu sâu vấn đề.",
                  icon: "✏️",
                },
                {
                  title: "Tài liệu phong phú",
                  description: "Trình bày rõ ràng, dễ áp dụng với nhiều dạng bài khác nhau.",
                  icon: "📝",
                },
                {
                  title: "Hỏi đáp với AI",
                  description: "Giải đáp mọi thắc mắc tức thời với trợ lý AI thông minh.",
                  icon: "🤖",
                },
                {
                  title: "Đánh giá khả năng",
                  description: "Nhận xét chi tiết giúp bạn cải thiện điểm yếu và phát huy điểm mạnh.",
                  icon: "📊",
                },
                {
                  title: "Thống kê thông minh",
                  description: "Theo dõi tiến độ học tập hiệu quả với biểu đồ trực quan.",
                  icon: "📈",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:-translate-y-1 duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About MELA Section */}
        <section ref={aboutRef} className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  MELA là gì?
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>MELA là ứng dụng học toán logic và nâng cao, giúp bạn phát triển tư duy vượt trội!</p>
                  <p>
                    Ứng dụng cung cấp kiến thức toán học phong phú từ lớp 1 đến lớp 5 và mở rộng hơn, phù hợp với mọi
                    trình độ.
                  </p>
                  <p>
                    Với các chủ đề như Đại số, Số học, Hình học, Tư duy và Tổ hợp,... MELA mang đến một trải nghiệm học tập
                    toàn diện.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Tính năng Chat với AI</h3>
                  <p className="text-gray-700">
                    Người học đưa ra một chuyên đề, một bài học đến Bot AI. Bot AI khi đó sẽ đóng vai như người giảng dạy,
                    từng bước tiếp cận đến từng phần kiến thức của bài học đến với người học từ đó yêu cầu người học tự
                    giải bài để Bot hỗ trợ về việc nhận xét và sửa bài.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-transparent rounded-3xl overflow-hidden p-6">
                  <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="relative max-w-[220px] mx-auto">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur opacity-30"></div>
                      <div className="relative bg-white rounded-2xl p-2 shadow-lg">
                        <Image
                          src="/Screen01.png"
                          alt="MELA App Screenshot 1"
                          width={220}
                          height={450}
                          className="w-full h-auto rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="relative max-w-[220px] mx-auto">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-30"></div>
                      <div className="relative bg-white rounded-2xl p-2 shadow-lg">
                        <Image
                          src="/Screen02.png"
                          alt="MELA App Screenshot 2"
                          width={220}
                          height={450}
                          className="w-full h-auto rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Math Question Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Trải nghiệm học tập tương tác
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Hãy thử sức với một câu hỏi toán học từ MELA</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <MathQuestion />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="download" ref={ctaRef} className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Hãy cùng MELA chinh phục toán học!</h2>
              <p className="text-lg mb-8 text-white/90">
                Tải ứng dụng ngay hôm nay và bắt đầu hành trình khám phá toán học thú vị cùng MELA.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Link href="https://play.google.com/store/apps/details?id=com.mela.app&hl=vi&fbclid=IwZXh0bgNhZW0CMTAAAR22p7FX84zyfOThBoDtGlQjznF4lyAO19AHIroxsYA5q67S_OnB_UuT_3c_aem_eR-ipu86BtT284-xJzrkJQ" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5"
                    >
                      <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                      <path d="m13 13 6 6"></path>
                    </svg>
                    Google Play
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Link href="https://apps.apple.com/vn/app/mela-h%E1%BB%8Dc-to%C3%A1n-t%C6%B0-duy/id6739699735?l=vi" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5"
                    >
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                      <path d="M10 2c1 .5 2 2 2 5"></path>
                    </svg>
                    App Store
                  </Link>
                </Button>
              </div>

              <div className="mt-12 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-white/30 rounded-3xl blur-md"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                    <div className="flex items-center justify-center">
                      <Smartphone className="h-12 w-12 text-white mr-4" />
                      <div className="text-left">
                        <h3 className="text-xl font-bold">Sẵn sàng trên mọi thiết bị</h3>
                        <p className="text-white/90">Trải nghiệm MELA trên điện thoại và máy tính bảng</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 w-[80%]">
                <div className="flex items-center space-x-2 mb-4">
                  <Image
                    src="/Logo.png"
                    alt="MELA Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="font-bold text-2xl">MELA</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Ứng dụng học toán tư duy đột phá, giúp bạn chinh phục toán học một cách dễ dàng và thú vị.
                </p>
                <div className="flex space-x-4">
                  {/* <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link> */}
                </div>
              </div>

              <div className="md:col-span-3 w-[70%] mx-auto">
                <h3 className="text-lg font-semibold mb-4">Liên kết</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      Trang chủ
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      Về chúng tôi
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy" className="text-gray-400 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      Chính sách
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-4 w-[75%] mx-auto">
                <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2 text-gray-400 mt-0.5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span className="text-gray-400">datnmathelearning2025@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2 text-gray-400 mt-0.5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="text-gray-400">Hỗ trợ: 0123 456 789</span> */}
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} MELA. Tất cả các quyền được bảo lưu.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Điều khoản sử dụng & Chính sách bảo mật
                </Link>
              </div>
            </div>
          </div>
        </footer>
        <DownloadPopup isOpen={isDownloadPopupOpen} onClose={() => setIsDownloadPopupOpen(false)} />
      </div>
    </>
  )
}

