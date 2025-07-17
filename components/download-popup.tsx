"use client"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface DownloadPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function DownloadPopup({ isOpen, onClose }: DownloadPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 m-4 animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
          <span className="sr-only">Đóng</span>
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#002060]">Tải ứng dụng MELA</h3>
          <p className="text-gray-600 mt-2">Chọn nền tảng để tải ứng dụng MELA</p>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <Image
            src="/icons/logo-512.png"
            alt="MELA App Preview"
            width={100}
            height={200}
          />
        </div>

        <div className="space-y-4 pb-3">
          <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
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
              Tải từ App Store
            </Link>
          </Button>

          <Button asChild className="w-full bg-green-600 text-white hover:bg-green-700">
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
              Tải từ Google Play
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
