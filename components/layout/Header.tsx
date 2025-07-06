'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="bg-white shadow-sm  fixed top-0 left-0 w-full z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center md:h-25 h-14">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-900">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={290}
                  height={94}
                  quality={100}
                  loading="eager"
                  className="h-12 w-auto md:h-19"
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-10 items-center">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 text-2xl uppercase font-heading"
              >
                Home
              </Link>
              <Link
                href="/commissions"
                className="text-gray-700 hover:text-gray-900 text-2xl uppercase font-heading"
              >
                Commissions
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 text-2xl uppercase font-heading"
              >
                About
              </Link>
            </nav>

            <div className="flex md:hidden">
              <button
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  )
}
