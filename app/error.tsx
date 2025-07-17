"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="text-6xl mb-4">😵</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Có lỗi xảy ra!</h2>
        <p className="text-gray-600 mb-6">Xin lỗi, đã có lỗi xảy ra khi tải trang. Vui lòng thử lại.</p>
        <div className="flex flex-col space-y-3">
          <Button onClick={reset} className="bg-[#002060] hover:bg-[#001040] text-white">
            Thử lại
          </Button>
          <Button variant="outline" onClick={() => (window.location.href = "/")}>
            Về trang chủ
          </Button>
        </div>
      </div>
    </div>
  )
}
