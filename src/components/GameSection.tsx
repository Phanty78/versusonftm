import Image from 'next/image'
import Link from 'next/link'
import VideoPlayer from './VideoPlayer'

interface GameSectionProps {
  title: string
  description: string
  price?: string
  videoSrc?: string
  imageSrc?: string
  playLink: string
}

export default function GameSection({
  title,
  description,
  price,
  videoSrc,
  imageSrc,
  playLink,
}: GameSectionProps) {
  return (
    <section className="mb-16 p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-4">{description}</p>
      {price && <p className="mb-4 font-semibold">{price}</p>}
      {videoSrc && <VideoPlayer src={videoSrc} />}
      {imageSrc && (
        <div className="mb-4 aspect-video relative">
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        </div>
      )}
      <Link
        href={playLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Play Now!
      </Link>
    </section>
  )
}
