import { useRef, useState } from "react";

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative h-120 w-full overflow-hidden flex flex-col">
      {/* Видео-фон */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/homeVideo.mp4"
        loop
        muted
      />

      {/* Контент поверх видео */}
      <div className="relative gap-4 z-10 flex flex-col h-full w-full items-center justify-center p-6 text-center text-white">
        <h2 className="text-4.5xl font-oswald w-140 font-semibold uppercase">
          OctoberFAST Exotics at New York Safety Track
        </h2>

        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="lg:hidden uppercase font-oswald font-medium bg-black/30 rounded-full flex gap-2 pl-4 items-center"
          >
            play video
            <img className="w-10 h-10" src="/play.svg" alt="play" />
          </button>
        )}
      </div>
    </div>
  );
}
