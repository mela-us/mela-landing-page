export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#002060] mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">Đang tải...</h2>
        <p className="text-gray-500 mt-2">Vui lòng chờ trong giây lát</p>
      </div>
    </div>
  )
}
