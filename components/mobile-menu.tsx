"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  onDownloadClick: () => void
}

export default function MobileMenu({ onDownloadClick }: MobileMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed top-0 right-0 w-full bg-white shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <Image
                  src="/icons/favicon.ico"
                  alt="MELA Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="font-bold text-2xl text-[#002060]">MELA</span>
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
                className="text-gray-700 hover:text-[#002060] font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#002060] font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Về chúng tôi
              </Link>
              <Link
                href="/policy"
                className="text-gray-700 hover:text-[#002060] font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Chính sách
              </Link>
              <Button
                onClick={() => {
                  onDownloadClick()
                  setIsMobileMenuOpen(false)
                }}
                className="bg-[#002060] hover:bg-[#001040] text-white mt-4"
              >
                Tải ứng dụng
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
