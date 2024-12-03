'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaTelegram, FaTwitter } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-black  text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 shadow-md flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold">
          <div className="w-32 flex items-center gap-2">
            <Image
              src="/logo.webp"
              alt="Versus logo"
              width={200}
              height={150}
              layout="responsive"
              priority
            />
            <h1 className="hidden md:block whitespace-nowrap">FTM Versus</h1>
          </div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link
            href="/gamelibrary"
            className="hover:text-gray-300 transition-colors"
          >
            Game Library
          </Link>
          <Link
            href="/tournaments"
            className="hover:text-gray-300 transition-colors"
          >
            Tournaments
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <a
            href="https://twitter.com/ftm_versus"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://t.me/FTM_Versus"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaTelegram size={20} />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
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
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-blue-700 py-2"
        >
          <Link href="/" className="block px-4 py-2 text-sm hover:bg-blue-600">
            Home
          </Link>
          <Link
            href="/gamelibrary"
            className="block px-4 py-2 text-sm hover:bg-blue-600"
          >
            Game Library
          </Link>
          <Link
            href="/tournaments"
            className="block px-4 py-2 text-sm hover:bg-blue-600"
          >
            Tournaments
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-sm hover:bg-blue-600"
          >
            About
          </Link>
          <div className="flex px-4 py-2 space-x-4">
            <a
              href="https://twitter.com/ftm_versus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-gray-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://t.me/FTM_Versus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-gray-300"
            >
              <FaTelegram size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
