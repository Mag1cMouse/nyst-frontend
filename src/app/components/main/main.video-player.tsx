import { useRef, useState } from 'react'

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="relative flex h-68 w-full flex-col overflow-hidden md:h-120">
      {/* Видео-фон */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/homeVideo.mp4"
        loop
        muted
      />

      {/* Контент поверх видео */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center text-white">
        <h2 className="md:text-4.5xl font-oswald flex-wrap text-2xl font-semibold uppercase md:w-140">
          OctoberFAST Exotics at New York Safety Track
        </h2>

        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="font-oswald flex items-center gap-2 rounded-full bg-black/30 pl-4 font-medium uppercase lg:hidden"
          >
            play video
            <img className="h-10 w-10" src="/play.svg" alt="play" />
          </button>
        )}
      </div>
    </div>
  )
}
