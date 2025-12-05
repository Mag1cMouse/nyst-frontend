import clsx from 'clsx'
import { useState } from 'react'
import { SliderButton } from './main.slider-button'

type TSlide = {
  backgroundUrl: string
  title?: string
  subtitle?: string
  description?: string
  button: {
    label: string
    link: string
    icon: string
    svg?: string
  }
}

const slides: TSlide[] = [
  {
    backgroundUrl: '/nyst.jpg',
    subtitle: 'WELCOME TO',
    title: 'NYST',
    description: 'NEW YORK SAFETY TRACK',
    button: {
      label: 'Start your engines',
      link: '/start',
      icon: '/arrowCircle.svg',
      svg: '/finishWhite.svg',
    },
  },
  {
    backgroundUrl: '/biks.jpg',
    title: '2025 Season events',
    subtitle: 'NEW YORK SAFETY TRACK',
    button: {
      label: 'view shedule',
      link: '/start',
      icon: '/arrowCircle.svg',
    },
  },
  {
    backgroundUrl: '/cars.jpg',
    subtitle: 'NEW YORK SAFETY TRACK',
    description:
      ' is more than just a racetrack—it’s a testament to passion, precision, and the relentless pursuit of speed.',
    button: {
      label: 'view shedule',
      link: '/start',
      icon: '/arrowCircle.svg',
    },
  },
  {
    backgroundUrl: '/JAT.jpg',
    subtitle: 'NEW YORK SAFETY TRACK',
    description: "is more than just a racetrack—it's also an FAA-registered airport",
    button: {
      label: 'view shedule',
      link: '/start',
      icon: '/arrowCircle.svg',
    },
  },
  {
    backgroundUrl: '/childrenOnBike.png',
    subtitle: 'NEW YORK SAFETY TRACK',
    title: 'Kids bike racing',
    button: {
      label: 'view shedule',
      link: '/start',
      icon: '/arrowCircle.svg',
    },
  },
]

export function Slider() {
  const [current, setCurrent] = useState(0)

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    let newCurrent = current + (e.deltaY > 0 ? -1 : 1)
    if (newCurrent < 0) newCurrent = 0
    if (newCurrent >= slides.length) newCurrent = slides.length - 1
    setCurrent(newCurrent)
  }

  return (
    <div
      onWheel={handleWheel}
      className="relative h-183.5 w-full overflow-hidden overscroll-contain rounded-2xl bg-gray-50 select-none"
      // onMouseEnter={}
    >
      {/* Слайды */}
      <div
        className="flex h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={clsx(
              'relative flex size-full shrink-0 snap-start bg-cover bg-center px-27 py-22 shadow-black',
            )}
            style={{ backgroundImage: `url(${slide.backgroundUrl})` }}
          >
            <div
              className={clsx(
                'pointer-events-none absolute from-black/80 to-transparent',
                index === 0
                  ? 'top-0 right-0 h-full w-2/3 bg-gradient-to-l'
                  : 'bottom-0 left-0 h-2/3 w-full bg-gradient-to-t',
              )}
            />

            <div
              className={clsx(
                'relative flex w-full',
                index === 0 ? 'right-11.25 items-center justify-end' : 'items-end',
              )}
            >
              <div
                className={clsx(
                  'font-cormorant relative flex items-center justify-center font-bold text-white',
                  index === 0 ? 'flex-col' : 'w-full justify-between',
                )}
              >
                <div
                  className={clsx(
                    'flex w-full flex-col justify-center uppercase',
                    index === 0 ? 'items-center' : 'gap-2.5',
                  )}
                >
                  <span className="text-3xl/7">{slide.subtitle}</span>
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={clsx(
                        'text-4.5xl/12.5',
                        index === 0 && 'text-12xl/36',
                        (index === 1 || index === 4) && 'font-sans',
                      )}
                    >
                      {slide.title}
                    </span>
                    {(index === 1 || index === 4) && (
                      <SliderButton icon={slide.button.icon}>{slide.button.label}</SliderButton>
                    )}
                  </div>
                  {slide.description && (
                    <div className="flex w-full items-center justify-between">
                      <span className={clsx(index === 0 ? 'text-3xl/7' : 'text-lg/4.5')}>
                        {slide.description}
                      </span>
                      {(index === 2 || index === 3) && (
                        <SliderButton icon={slide.button.icon}>{slide.button.label}</SliderButton>
                      )}
                    </div>
                  )}
                </div>

                {index === 0 && (
                  <SliderButton icon={slide.button.icon} withFirstImg svg={slide.button.svg}>
                    {slide.button.label}
                  </SliderButton>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопки */}
      <button
        onClick={() => setCurrent((prev) => Math.min(prev - 1, slides.length - 1))}
        className="absolute bottom-4 left-27 -translate-y-1/2 rounded-sm border border-white p-0.5 transition"
      >
        <img className="size-5 rotate-180" src="/arrow.svg" alt="" />
      </button>
      <button
        onClick={() => setCurrent((prev) => Math.min(prev + 1, slides.length - 1))}
        className="absolute right-27 bottom-4 -translate-y-1/2 rounded-sm border border-white p-0.5 transition"
      >
        <img className="size-5" src="/arrow.svg" alt="" />
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex size-2 justify-end rounded-full bg-white transition ${current === i && 'w-9.5 transition-all duration-300'}`}
          >
            <div
              className={`${current === i ? 'bg-yellow-450 h-full w-4.75 rounded-full transition-all duration-300' : 'bg-white transition-all duration-300'}`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
