import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

type TSlide = {
  id: string
  backgroundUrl: string
  title: string
  subtitle?: string
  description?: string
  button: {
    label: string
    link: string
    icon?: string
    svg: string
  }
}

const slidesArr: TSlide[] = [
  {
    id: 'nyst-1',
    backgroundUrl: '/nyst.jpg',
    title: 'NYST 1',
    subtitle: 'WELCOME TO',
    description: 'NEW YORK SAFETY TRACK',
    button: {
      label: 'Start your engines',
      link: '/start',
      icon: '/arrowCircle.svg',
      svg: '/finish.svg',
    },
  },
  {
    id: 'nyst-2',
    backgroundUrl: '/nyst.jpg',
    title: 'NYST 2',
    subtitle: 'WELCOME TO',
    description: 'NEW YORK SAFETY TRACK',
    button: {
      label: 'Start your engines',
      link: '/start',
      icon: '/arrowCircle.svg',
      svg: '/finish.svg',
    },
  },
  {
    id: 'nyst-3',
    backgroundUrl: '/nyst.jpg',
    title: 'NYST 3',
    subtitle: 'WELCOME TO',
    description: 'NEW YORK SAFETY TRACK',
    button: {
      label: 'Start your engines',
      link: '/start',
      icon: '/arrowCircle.svg',
      svg: '/finish.svg',
    },
  },
  {
    id: 'nyst-4',
    backgroundUrl: '/nyst.jpg',
    title: 'NYST 4',
    subtitle: 'WELCOME TO',
    description: 'NEW YORK SAFETY TRACK',
    button: {
      label: 'Start your engines',
      link: '/start',
      icon: '/arrowCircle.svg',
      svg: '/finish.svg',
    },
  },
  {
    id: 'nyst-5',
    backgroundUrl: '/nyst.jpg',
    title: 'NYST 5',
    subtitle: 'WELCOME TO',
    description: 'NEW YORK SAFETY TRACK',
    button: {
      label: 'Start your engines',
      link: '/start',
      icon: '/arrowCircle.svg',
      svg: '/finish.svg',
    },
  },
]

export function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const slides = slidesArr
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (isScrolling) return
      setIsScrolling(true)

      let newCurrent = current + (e.deltaY > 0 ? -1 : 1)

      if (newCurrent < 0 || newCurrent === slides.length) newCurrent = 0
      if (newCurrent >= slides.length) newCurrent = slides.length - 1

      setCurrent(newCurrent)

      setTimeout(() => setIsScrolling(false), 100)
    }

    slider.addEventListener('wheel', handleWheel, { passive: false })
    return () => slider.removeEventListener('wheel', handleWheel)
  }, [current, isScrolling, slides.length])

  return (
    <div ref={sliderRef} className="relative h-183.5 w-full overflow-hidden rounded-2xl select-none">
      {/* Слайды */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex size-full shrink-0 flex-row justify-between rounded-2xl bg-cover bg-center bg-no-repeat p-15"
            style={{ backgroundImage: `url(${slide.backgroundUrl})` }}
          >
            <div className="relative right-30 flex w-full items-center justify-end">
              <div className="font-cormorant relative flex snap-x snap-mandatory flex-col items-center justify-center overflow-x-scroll scroll-smooth font-bold text-white">
                <span className="text-3xl/7">{slide.subtitle}</span>
                <span className="text-12xl/36">{slide.title}</span>
                <span className="text-3xl/7">{slide.description}</span>
                <div className="font-oswald flex gap-4">
                  <div className="flex items-center gap-1">
                    <img src={slide.button?.svg} alt="" className="size-6" />
                    <Link to="#">{slide.button?.label}</Link>
                  </div>
                  <img src={slide.button?.icon} alt={slide.button?.label} className="size-8" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопки */}
      <button
        onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
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
            className={`h-3 w-3 rounded-full transition ${current === i ? 'bg-yellow-400' : 'bg-white'}`}
          />
        ))}
      </div>
    </div>
  )
}
