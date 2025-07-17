"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const appScreenshots = [
  {
    id: 1,
    title: "Trang chủ",
    description: "Giao diện chính với danh sách lớp học",
    image: "/images/screens/home.PNG",
  },
  {
    id: 2,
    title: "Hỏi đáp với AI",
    description: "Đặt câu hỏi và nhận giải thích từ AI",
    image: "/images/screens/image-qa.png",
  },
  {
    id: 3,
    title: "Bài học đề xuất",
    description: "Các bài học được đề xuất để tiếp tục học",
    image: "/images/screens/suggestion.PNG",
  },
  {
    id: 4,
    title: "Chủ đề và bài học",
    description: "Xem các chủ đề và bài học trong lớp học",
    image: "/images/screens/topics.PNG",
  },
  {
    id: 5,
    title: "Bài giảng",
    description: "Danh sách các bài giảng trong bài học",
    image: "/images/screens/lecture.PNG",
  },
  {
    id: 6,
    title: "Bài giảng PDF",
    description: "Học lý thuyết với bài giảng PDF",
    image: "/images/screens/section.PNG",
  },
  {
    id: 7,
    title: "AI hỗ trợ bài giảng",
    description: "Đặt câu hỏi và nhận giải thích từ AI",
    image: "/images/screens/section-copy-qa.PNG",
  },
  {
    id: 8,
    title: "Bài luyện tập",
    description: "Danh sách các bài luyện tập trong bài học",
    image: "/images/screens/exercises-list.PNG",
  },
  {
    id: 9,
    title: "Thống kê năng lực",
    description: "Biểu đồ ngũ giác đánh giá năng lực",
    image: "/images/screens/chart.png",
  },
  {
    id: 10,
    title: "Lịch sử học tập",
    description: "Theo dõi tiến độ và lịch sử làm bài chi tiết",
    image: "/images/screens/stat3.png",
  },
  {
    id: 11,
    title: "Streak học tập",
    description: "Ghi nhận chuỗi học tập hàng ngày",
    image: "/images/screens/streak-count.png",
  },
]

export default function AppPreviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % appScreenshots.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + appScreenshots.length) % appScreenshots.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % appScreenshots.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative flex flex-col items-center gap-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl blur-2xl opacity-30 mx-auto w-1/2"></div>
        {/* Title and Description - Above Phone */}
        <div className="text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-gray-700 mb-1">{appScreenshots[currentIndex].title}</h3>
          <p className="text-gray-700 text-base">{appScreenshots[currentIndex].description}</p>
        </div>

        {/* Phone Frame with Screenshot */}
        <div className="relative flex-shrink-0 flex justify-center">
          <div className="relative">
            {/* iPhone Frame */}
            <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Screenshot */}
                <div className="relative w-[261px] h-[530px] overflow-hidden">
                  <Image
                    src={appScreenshots[currentIndex].image || "/placeholders/placeholder.svg"}
                    alt={appScreenshots[currentIndex].title}
                    width={261}
                    height={530}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex space-x-2">
          {appScreenshots.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#002060] scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
