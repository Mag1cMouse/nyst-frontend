export function VideoPlayer() {
  return (
    <div className="relative h-120 w-full overflow-hidden">
      {/* Видео-фон */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/homeVideo.mp4"
        autoPlay
        loop
        muted
      />

      {/* Контент поверх видео */}
      <div className="relative z-10 flex size-full items-center justify-center bg-black/50 p-6 text-center text-white">
        <h2 className="text-4.5xl font-oswald w-140 font-semibold uppercase">
          OctoberFAST Exotics at New York Safety Track
        </h2>
      </div>
    </div>
  )
}
