'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const sponsors = [
  { name: '0xHelder', image: '/placeholder.svg?height=100&width=100' },
  { name: 'BoostFTM', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Fantom Corndog', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Chill Pill', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Debita Finance', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Fantom Punks', image: '/placeholder.svg?height=100&width=100' },
]

export default function Sponsors() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Sponsors
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={100}
                height={100}
                className="rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
