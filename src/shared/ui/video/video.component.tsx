import type { SharedTypes } from '@shared'
import { useRef, useState } from 'react'

type TVideoItem = {
  srcVideo: string
  title: string
  subTitle?: string
  text?: string
}

type Props = SharedTypes.Ui.PropsWithClassName<{
  item: TVideoItem
  h2ClassName?: string
  divFullClassName: string
}>

export const Video = (props: Props) => {
  const { className, item, h2ClassName, divFullClassName, ...restProps } = props

  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [isPlayingVideo, setIsPlayingVideo] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlayingVideo(true)
    }
  }

  return (
    <div className={className} {...restProps}>
      {/* Видео */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 z-0 size-full object-cover"
        src={item.srcVideo}
        loop
        muted
        // autoPlay
      />

      <div className={divFullClassName}>
        <div className="flex flex-col">
          {item.subTitle && <div className="font-oswald text-4.5xl font-semibold">{item.subTitle}</div>}
          <h2
            className={h2ClassName}
          >
            {item.title}
          </h2>
          {item.text && <div className="font-cormorant text-3.5xl font-bold">{item.text}</div>}
        </div>

        {!isPlayingVideo && (
          <button
            onClick={handlePlay}
            className="font-oswald flex items-center gap-2 rounded-full bg-black/30 pl-4 font-medium uppercase lg:hidden"
          >
            play video
            <img className="size-10" src="/play.svg" alt="play" />
          </button>
        )}
      </div>
    </div>
  )
}
