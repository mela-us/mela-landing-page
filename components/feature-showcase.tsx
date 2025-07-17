import { Brain, MessageSquare, Target, TrendingUp, BookOpen, Zap } from "lucide-react"

const features = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Chat với AI thông minh",
    description: "AI hỗ trợ giải bài tập theo luồng gia sư: phân tích đề bài, gợi ý thông minh và chấm điểm tự động.",
    color: "#002060",
    bgColor: "bg-gradient-to-r from-purple-600 to-pink-600",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI chấm điểm bài tự luận",
    description: "AI chấm điểm tự động cho bài tập tự luận, đưa ra nhận xét chi tiết và đề xuất cải thiện.",
    color: "#002060",
    bgColor: "bg-gradient-to-r from-green-600 to-blue-600",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Thống kê năng lực học tập",
    description: "Biểu đồ ngũ giác đánh giá năng lực toán học một cách trực quan và lịch sử làm bài đánh giá tiến độ.",
    color: "#002060",
    bgColor: "bg-gradient-to-r from-yellow-600 to-orange-600",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Streak học tập hàng ngày",
    description: "Ghi nhận và duy trì chuỗi học tập hàng ngày, tạo động lực học tập bền vững, nhận thưởng token để sử dụng tính năng AI nâng cao.",
    color: "#002060",
    bgColor: "bg-gradient-to-r from-blue-600 to-purple-600",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Bài tập phong phú có AI hỗ trợ",
    description: "Các bài luyện tập và kiểm tra, các câu hỏi trắc nghiệm, tự luận và điền khuyết với AI hỗ trợ gợi ý và giải thích chi tiết cho từng bài.",
    color: "#002060",
    bgColor: "bg-gradient-to-r from-red-600 to-pink-600",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Nội dung học tập đa dạng",
    description: "Nội dung gồm các bài học và bài luyện tập được phân chia rõ ràng theo từng lớp và từng chủ đề.",
    color: "#002060",
    bgColor: "bg-gradient-to-r from-teal-600 to-cyan-600",
  },
]

export default function FeatureShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
        >
          {/* Icon */}
          <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
            {feature.icon}
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-[#002060] transition-colors">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>

          {/* Hover Effect Line */}
          <div className={`absolute bottom-0 left-0 w-full h-1 ${feature.bgColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
        </div>
      ))}
    </div>
  )
}
