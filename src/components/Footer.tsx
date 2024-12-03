import Link from 'next/link'
import { FaEnvelope, FaTelegram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">FTM Versus!</h3>
            <p className="text-sm">
              Premier tournament hosting
              <br /> on the Fantom Blockchain
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="hover:text-gray-300">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gamelibrary" className="hover:text-gray-300">
                  Game Library
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/ftm_versus"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://t.me/FTM_Versus"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaTelegram size={24} />
              </a>
              <a
                href="mailto:fantomversus.team@gmail.com"
                className="hover:text-gray-300"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} FTM Versus!. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
