import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại trang chủ
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
              Chính sách & Điều khoản
            </h1>
            <p className="text-lg text-gray-700">Thông tin pháp lý về việc sử dụng ứng dụng MELA</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Chính sách bảo mật</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Cập nhật lần cuối:</strong> 28/03/2025
              </p>
              <p>
                Chúng tôi tại MELA - Học Toán Tư Duy cam kết bảo vệ quyền riêng tư của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn khi bạn sử dụng ứng dụng MELA.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">1. Định nghĩa</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tài khoản: Tài khoản duy nhất được tạo để bạn truy cập dịch vụ của chúng tôi.</li>
                <li>Thiết bị: Bất kỳ thiết bị nào có thể truy cập ứng dụng, như máy tính, điện thoại di động hoặc máy tính bảng.</li>
                <li>Dữ liệu cá nhân: Bất kỳ thông tin nào liên quan đến một cá nhân có thể được nhận diện.</li>
                <li>Dữ liệu sử dụng: Dữ liệu được thu thập tự động khi sử dụng ứng dụng.</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">2. Thông tin chúng tôi thu thập</h3>
              <p>Chúng tôi có thể thu thập các loại thông tin sau:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Thông tin cá nhân: tên, địa chỉ email, tuổi (để cung cấp nội dung phù hợp)</li>
                <li>Thông tin sử dụng: dữ liệu về cách bạn tương tác với ứng dụng, tiến độ học tập</li>
                <li>Thông tin thiết bị: loại thiết bị, hệ điều hành, ID thiết bị</li>
                <li>Thông tin chat: nội dung chat, thời gian chat, phục vụ cho việc cá nhân hoá trải nghiệm học tập của người dùng</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">3. Cách chúng tôi sử dụng thông tin</h3>
              <p>Chúng tôi sử dụng thông tin thu thập để:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cung cấp, duy trì và cải thiện ứng dụng MELA</li>
                <li>Cá nhân hóa trải nghiệm học tập của bạn</li>
                <li>Phân tích cách người dùng sử dụng ứng dụng để cải thiện dịch vụ</li>
                <li>Liên lạc với bạn về cập nhật, thông báo và hỗ trợ</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">4. Bảo mật dữ liệu</h3>
              <p>
                Chúng tôi thực hiện các biện pháp bảo mật hợp lý để bảo vệ thông tin cá nhân của bạn khỏi truy cập trái
                phép, thay đổi, tiết lộ hoặc phá hủy. Tuy nhiên, không có phương thức truyền tải qua internet hoặc lưu
                trữ điện tử nào là an toàn 100%.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">5. Chia sẻ thông tin</h3>
              <p>
                Chúng tôi không bán, trao đổi hoặc chuyển giao thông tin cá nhân của bạn cho bên thứ ba. Điều này không
                bao gồm các bên thứ ba đáng tin cậy hỗ trợ chúng tôi vận hành ứng dụng, miễn là họ đồng ý giữ bí mật
                thông tin này.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">6. Quyền của bạn</h3>
              <p>Bạn có quyền:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Truy cập thông tin cá nhân của bạn mà chúng tôi lưu giữ</li>
                <li>Yêu cầu chỉnh sửa hoặc xóa thông tin cá nhân của bạn</li>
                <li>Phản đối việc xử lý thông tin cá nhân của bạn</li>
                <li>Yêu cầu hạn chế xử lý thông tin cá nhân của bạn</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">7. Thay đổi chính sách</h3>
              <p>
                Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất
                kỳ thay đổi nào bằng cách đăng chính sách mới trên trang này và thông báo qua email (nếu có).
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">8. Liên hệ</h3>
              <p>
                Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, vui lòng liên hệ với chúng tôi qua email:
                datnmathelearning2025@gmail.com
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Điều khoản sử dụng</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Cập nhật lần cuối:</strong> 28/03/2025
              </p>
              <p>
                Vui lòng đọc kỹ các điều khoản sử dụng này trước khi sử dụng ứng dụng MELA. Bằng cách truy cập hoặc sử
                dụng ứng dụng MELA, bạn đồng ý bị ràng buộc bởi các điều khoản và điều kiện này.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">1. Giấy phép sử dụng</h3>
              <p>
                Vui lòng đọc kỹ các điều khoản sử dụng này trước khi sử dụng ứng dụng MELA. Bằng cách truy cập hoặc sử dụng ứng dụng, bạn đồng ý bị ràng buộc bởi các điều khoản và điều kiện này.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sao chép, phân phối lại hoặc sửa đổi ứng dụng</li>
                <li>Đảo ngược kỹ thuật, dịch ngược hoặc cố gắng trích xuất mã nguồn</li>
                <li>Sử dụng ứng dụng cho mục đích thương mại</li>
                <li>Chuyển giao quyền sử dụng ứng dụng cho người khác</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">2. Nội dung người dùng</h3>
              <p>
                Khi bạn tạo, tải lên hoặc chia sẻ nội dung thông qua ứng dụng MELA, bạn cấp cho chúng tôi quyền sử dụng,
                lưu trữ và hiển thị nội dung đó để cung cấp dịch vụ. Bạn chịu trách nhiệm về nội dung bạn chia sẻ và đảm
                bảo rằng bạn có quyền chia sẻ nội dung đó.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">3. Tài khoản người dùng</h3>
              <p>
                Bạn có trách nhiệm duy trì tính bảo mật của tài khoản và mật khẩu của mình. Bạn đồng ý thông báo ngay
                cho chúng tôi về bất kỳ việc sử dụng trái phép tài khoản của bạn.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">4. Quyền sở hữu trí tuệ</h3>
              <p>
                Ứng dụng MELA và nội dung của nó, bao gồm nhưng không giới hạn ở văn bản, đồ họa, logo, biểu tượng, hình
                ảnh, âm thanh, phần mềm và các tài liệu khác, được bảo vệ bởi luật bản quyền, thương hiệu và các quyền
                sở hữu trí tuệ khác.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">5. Từ chối trách nhiệm</h3>
              <p>
                Ứng dụng MELA được cung cấp "nguyên trạng" và "như có sẵn" mà không có bất kỳ bảo đảm nào, dù rõ ràng
                hay ngụ ý. Chúng tôi không đảm bảo rằng ứng dụng sẽ luôn có sẵn, không bị gián đoạn, kịp thời, an toàn
                hoặc không có lỗi.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">6. Giới hạn trách nhiệm</h3>
              <p>
                Trong mọi trường hợp, MELA, các giám đốc, nhân viên, đối tác hoặc đại lý của chúng tôi sẽ không chịu
                trách nhiệm về bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, hậu quả hoặc trừng phạt nào phát sinh
                từ việc sử dụng hoặc không thể sử dụng ứng dụng.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">7. Thay đổi điều khoản</h3>
              <p>
                Chúng tôi có thể sửa đổi các điều khoản này theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ
                thay đổi nào bằng cách đăng các điều khoản mới trên trang này và thông báo qua email (nếu có).
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">8. Luật áp dụng</h3>
              <p>
                Các điều khoản này sẽ được điều chỉnh và giải thích theo luật pháp Việt Nam, mà không tính đến các
                nguyên tắc xung đột pháp luật.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

