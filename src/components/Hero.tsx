'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-customblue  text-white">
      <div className="relative mx-auto px-6 text-center">
        <Image
          src="/background-light.webp"
          alt="background fantasia light"
          fill
          layout="reponsive"
          className="object-cover opacity-70"
        />
        <div className="relative z-10 pt-28">
          <motion.h1
            className="text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to the premier tournament hosting platform on the Fantom
            Blockchain!
          </motion.h1>
          <motion.p
            className="text-2xl mb-8 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join the exciting world of competitive gaming on Fantom
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="https://t.me/FTM_Versus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600  text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Community
            </Link>
            <Link
              href="https://www.dextools.io/app/en/fantom/pair-explorer/0x4bbecd638188ed3f871bf44422f4016c22f2de3a?t=1712657375709"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600  text-white  font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Chart
            </Link>
            <Link
              href="https://equalizer.exchange/swap?outputCurrency=0xe816B19b673088C02F3c9e03bC4A66E1eF676CF7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600  text-white  font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Buy
            </Link>
            <Link
              href="https://bridge.equalizer.exchange/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600  text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Bridge to $FTM
            </Link>
            <Link
              href="/gamelibrary"
              className="bg-blue-600  text-white  font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300"
            >
              $FTM Web3 Game Library
            </Link>
          </motion.div>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-xl font-bold text-gray-800">
              Tournament Wallet: 0x2c89af97E37D82F7eadF90BC945353D8062B1B66
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
