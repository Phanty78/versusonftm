'use client'

import ReactPlayer from 'react-player'

interface VideoPlayerProps {
  src: string
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  return (
    <div className="mb-4 aspect-video">
      <ReactPlayer
        url={src}
        width="100%"
        height="100%"
        controls={true}
        playing={true}
        muted={true}
        loop={true}
        config={{
          file: {
            attributes: {
              style: { width: '100%', height: '100%' },
            },
          },
        }}
      />
    </div>
  )
}
