import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-[#002060] hover:text-[#001040] mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại trang chủ
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#002060] to-blue-600 bg-clip-text text-transparent mb-4">Về Chúng Tôi</h1>
            <p className="text-lg text-gray-700">Đội ngũ phát triển MELA - Đam mê giáo dục và công nghệ AI</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Câu chuyện của chúng tôi</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                MELA ra đời từ niềm đam mê giáo dục và công nghệ AI. Chúng tôi nhận thấy rằng việc học toán thường được
                xem là khó khăn và nhàm chán đối với nhiều học sinh. Vì vậy, chúng tôi quyết định tạo ra một ứng dụng
                tích hợp AI giúp việc học toán trở nên thú vị và hiệu quả hơn.
              </p>
              <p>
                Đội ngũ của chúng tôi bao gồm các nhà phát triển phần mềm, có chung một mục tiêu: Tạo ra một nền tảng học tập toán học
                tích hợp AI tuyệt vời cho học sinh Việt Nam.
              </p>
              <p>
                Với MELA, chúng tôi không chỉ dạy toán mà còn phát triển tư duy logic và kỹ năng giải quyết vấn đề thông
                qua sự hỗ trợ của AI thông minh - những kỹ năng quan trọng cho tương lai của các em.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Đội ngũ phát triển</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Trần Anh Kiệt",
                  role: "Developer",
                  bio: "Backend Developer",
                  image: "/placeholders/placeholder.svg?height=200&width=200",
                  gender: "male",
                },
                {
                  name: "Nguyễn Tấn Hoàng Sa",
                  role: "Developer",
                  bio: "Frontend Developer",
                  image: "/placeholders/placeholder.svg?height=200&width=200",
                  gender: "male",
                },
                {
                  name: "Phạm Phúc Thuần",
                  role: "Developer",
                  bio: "Frontend Developer",
                  image: "/placeholders/placeholder.svg?height=200&width=200",
                  gender: "male",
                },
                {
                  name: "Trần Tiến",
                  role: "Developer",
                  bio: "Backend Developer",
                  image: "/placeholders/placeholder.svg?height=200&width=200",
                  gender: "male",
                },
                {
                  name: "Phan Trí Nhân",
                  role: "Developer",
                  bio: "Frontend Developer",
                  image: "/placeholders/placeholder.svg?height=200&width=200",
                  gender: "male",
                },
                {
                  name: "Nguyễn Thiên An",
                  role: "Developer",
                  bio: "Backend Developer",
                  image: "/placeholders/placeholder.svg?height=200&width=200",
                  gender: "female",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src={member.image || "/placeholders/placeholder.svg"}
                        alt={member.name}
                        width={100}
                        height={100}
                        className="object-cover w-24 h-24"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-[#002060] font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Sứ mệnh của chúng tôi</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Sứ mệnh của MELA là giúp mọi học sinh Việt Nam tiếp cận với phương pháp học toán hiện đại tích hợp AI,
                hiệu quả và thú vị. Chúng tôi tin rằng mỗi đứa trẻ đều có tiềm năng toán học và MELA với sự hỗ trợ của
                AI sẽ là công cụ giúp các em khám phá và phát triển tiềm năng đó.
              </p>
              <p>Chúng tôi cam kết:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Cung cấp nội dung học tập chất lượng cao tích hợp AI, phù hợp với chương trình giáo dục Việt Nam
                </li>
                <li>Liên tục cập nhật và cải tiến ứng dụng AI dựa trên phản hồi của người dùng</li>
                <li>Tạo ra môi trường học tập an toàn, thân thiện và khuyến khích sự sáng tạo với sự hỗ trợ của AI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
