import type { SharedTypes } from '@shared'
import { useState } from 'react'

type Props = SharedTypes.Ui.PropsWithClassName<{
  slides: string[] | string
}>

export const MiniSlider = (props: Props) => {
  const { className = 'flex gap-2 font-oswald', slides, ...restProps } = props

  const [current, setCurrent] = useState(0)

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const next = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={className} {...restProps}>
      {/* Slides */}
      <div
        className="rounded-2lg flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {Array.isArray(slides) &&
          slides.map((slide, i) => (
            <div key={i} className="min-w-full">
              <img src={slide} className="h-64 w-full object-cover" />
            </div>
          ))}
      </div>

      <div className="flex w-full items-center justify-between px-2 py-1">
        <button onClick={prev}>
          <img className="size-6" src="/arrowBlack.svg" alt="" />
        </button>

        <div className="flex justify-center gap-2">
          {Array.isArray(slides) &&
            slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex size-2 justify-end rounded-full bg-black transition ${current === i && 'w-9.5 duration-300'}`}
              >
                <div
                  className={`${current === i ? 'bg-yellow-450 h-full w-4.75 rounded-full duration-300' : 'bg-black duration-300'}`}
                />
              </button>
            ))}
        </div>
        <button onClick={next}>
          <img className="size-6 rotate-180" src="/arrowBlack.svg" alt="" />
        </button>
      </div>
    </div>
  )
}
