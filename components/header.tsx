"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileMenu from "./mobile-menu"
import DownloadPopup from "./download-popup"

export default function Header() {
  const [isDownloadPopupOpen, setIsDownloadPopupOpen] = useState(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/icons/favicon.ico"
                alt="MELA Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-bold text-2xl text-[#002060]">MELA</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#002060] font-medium transition-colors">
                Trang chủ
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#002060] font-medium transition-colors">
                Về chúng tôi
              </Link>
              <Link href="/policy" className="text-gray-700 hover:text-[#002060] font-medium transition-colors">
                Chính sách
              </Link>
              <div className="flex space-x-2">
                <Button
                  onClick={() => setIsDownloadPopupOpen(true)}
                  className="bg-[#002060] hover:bg-[#001040] text-white"
                >
                  Tải ứng dụng
                </Button>
              </div>
            </nav>
            <MobileMenu onDownloadClick={() => setIsDownloadPopupOpen(true)} />
          </div>
        </div>
      </header>
      <DownloadPopup isOpen={isDownloadPopupOpen} onClose={() => setIsDownloadPopupOpen(false)} />
    </>
  )
}
