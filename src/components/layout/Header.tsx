'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { FaTelegram, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [isOpen])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        event.target instanceof Element &&
        !event.target.closest('nav')
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 shadow-md">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="w-24 sm:w-32 flex items-center gap-2">
              <Image
                src="/logo.webp"
                alt="Versus logo"
                width={100}
                height={75}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
              <h1 className="hidden lg:block whitespace-nowrap text-white text-xl font-bold">
                FTM Versus
              </h1>
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/game-library"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Game Library
            </Link>
            <Link
              href="/tournaments"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Tournaments
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <a
              href="https://twitter.com/ftm_versus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://t.me/FTM_Versus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaTelegram size={20} />
            </a>
          </div>

          {/* Menu Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/game-library"
            className="block text-white hover:text-gray-300 transition-colors"
            onClick={closeMenu}
          >
            Game Library
          </Link>
          <Link
            href="/tournaments"
            className="block text-white hover:text-gray-300 transition-colors"
            onClick={closeMenu}
          >
            Tournaments
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-gray-300 transition-colors"
            onClick={closeMenu}
          >
            About
          </Link>
          <div className="flex space-x-4 pt-2">
            <a
              href="https://twitter.com/ftm_versus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://t.me/FTM_Versus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaTelegram size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
