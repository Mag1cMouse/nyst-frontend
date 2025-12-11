import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { CircleArrow } from '@shared/ui'

type TSlide = {
  backgroundUrl: string
  title?: string
  subtitle?: string
  description?: string
  button: {
    label: string
    link: string
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
    },
  },
  {
    backgroundUrl: '/JAT.jpg',
    subtitle: 'NEW YORK SAFETY TRACK',
    description: "is more than just a racetrack—it's also an FAA-registered airport",
    button: {
      label: 'view shedule',
      link: '/start',
    },
  },
  {
    backgroundUrl: '/childrenOnBike.png',
    subtitle: 'NEW YORK SAFETY TRACK',
    title: 'Kids bike racing',
    button: {
      label: 'view shedule',
      link: '/start',
    },
  },
]

export function Slider() {
  const [currentSliderCard, setCurrentSliderCard] = useState(0)

  const sliderStepToLeft = () =>
    setCurrentSliderCard((prev) => (prev !== 0 ? Math.max(prev - 1, 0) : slides.length - 1))

  const sliderStepToRight = () =>
    setCurrentSliderCard((prev) => (prev !== slides.length - 1 ? Math.max(prev + 1, 0) : 0))

  useEffect(() => {
    setInterval(
      () => setCurrentSliderCard((prev) => (prev !== slides.length - 1 ? Math.max(prev + 1, 0) : 0)),
      3000,
    )
  }, [])
  return (
    <div className="relative z-10 h-160 w-full overflow-hidden rounded-2xl bg-gray-50 select-none md:h-183.5">
      {/* Слайды */}
      <div
        className="flex h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentSliderCard * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={clsx(
              'relative flex size-full shrink-0 snap-start bg-cover bg-center px-4 py-22 shadow-black md:px-7.5 lg:px-27',
            )}
            style={{ backgroundImage: `url(${slide.backgroundUrl})` }}
          >
            <div
              className={clsx(
                'pointer-events-none absolute from-black/80 to-transparent md:w-full',
                index === 0
                  ? 'md:from-bg-black/80 top-0 right-0 h-full w-full bg-black/10 bg-gradient-to-t lg:bg-gradient-to-l'
                  : 'bottom-0 left-0 h-2/3 w-full bg-gradient-to-t',
              )}
            />

            <div
              className={clsx(
                'relative flex w-full',
                index === 0 ? 'items-center md:justify-center lg:right-11.25 lg:justify-end' : 'items-end',
              )}
            >
              <div
                className={clsx(
                  'font-cormorant relative flex justify-center font-bold text-white md:shrink-0 md:gap-5 md:text-center',
                  index === 0 ? 'flex-col items-center' : 'w-full justify-between',
                )}
              >
                <div
                  className={clsx(
                    'flex w-full flex-col justify-center uppercase',
                    index === 0 ? 'items-center' : 'lg:gap-2.5',
                  )}
                >
                  <span className="text-3.5xl/7 md:text-start md:text-3xl/7">{slide.subtitle}</span>
                  <div className="flex w-full flex-col justify-between gap-2 md:w-full md:gap-3 md:text-start lg:flex-row lg:items-center">
                    <span
                      className={clsx(
                        'lg:text-4.5xl/12.5 text-2xl md:w-full md:text-start',
                        index === 0 && 'md:text-12xl/36 lg:text-12xl/36 w-full text-center text-9xl',
                        (index === 1 || index === 4) && 'font-oswald',
                      )}
                    >
                      {slide.title}
                    </span>
                    {(index === 1 || index === 4) && (
                      <CircleArrow svgClassName="size-4" link={slide.button.link} text={slide.button.label} />
                    )}
                  </div>
                  {slide.description && (
                    <div className="w-ful flex flex-col justify-between gap-2 md:gap-5 lg:flex-row lg:items-center">
                      <span
                        className={clsx(
                          index === 0
                            ? 'text-center text-3xl/7'
                            : 'font-oswald text-lg/4.5 font-normal md:text-start',
                        )}
                      >
                        {slide.description}
                      </span>
                      {(index === 2 || index === 3) && (
                        <CircleArrow
                          svgClassName="size-4"
                          link={slide.button.link}
                          text={slide.button.label}
                        />
                      )}
                    </div>
                  )}
                </div>

                {index === 0 && (
                  <CircleArrow svgClassName="size-4" link={slide.button.link} text={slide.button.label} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопки */}
      <button
        onClick={sliderStepToLeft}
        className="absolute bottom-4 left-4 -translate-y-1/2 rounded-sm border border-white p-0.5 transition md:left-7.5 lg:left-27"
      >
        <img className="size-5 rotate-180" src="/arrow.svg" alt="" />
      </button>
      <button
        onClick={sliderStepToRight}
        className="absolute right-4 bottom-4 -translate-y-1/2 rounded-sm border border-white p-0.5 transition md:right-7.5 lg:right-27"
      >
        <img className="size-5" src="/arrow.svg" alt="" />
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2 lg:bottom-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSliderCard(i)}
            className={`flex size-2 justify-end rounded-full bg-white transition ${currentSliderCard === i && 'w-9.5 transition-all duration-300'}`}
          >
            <div
              className={`${currentSliderCard === i ? 'bg-yellow-450 h-full w-4.75 rounded-full transition-all duration-300' : 'bg-white transition-all duration-300'}`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
