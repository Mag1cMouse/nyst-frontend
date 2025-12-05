import clsx from 'clsx'
import { Link } from 'react-router'
import { ArrowCircle } from './main.arrowCircle'

type TDescriptionCardArray = {
  text: string
  title: string
  description: string
  img: string
  finishSvg: string
  lineSvg: string
  button: {
    svg: string
    text: string
    next: string
    link: string
  }
}

type TProps = {
  item: TDescriptionCardArray
  index: number
}

export function DescriptionCard(props: TProps) {
  const { item, index } = props
  return (
    <div
      className={clsx(
        'flex w-full justify-between gap-5 md:flex-col-reverse md:px-7.5 md:py-15 lg:flex-row lg:items-center lg:p-20',
        index % 2 === 0 ? 'flex-row-reverse bg-gray-50' : '',
      )}
    >
      <img src={item.img} alt="" className="rounded-2lg w-full lg:w-1/2" />
      <div className="font-oswald flex flex-col gap-6 lg:w-1/2">
        <div className="flex gap-1.5">
          <img src={item.finishSvg} alt={item.finishSvg} className="size-6 text-black" />
          <img src={item.lineSvg} alt={item.lineSvg} className="lg:w-15 md:w-3" />
          <span className="uppercase">{item.text}</span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="lg:text-4.5xl/15 font-semibold uppercase">{item.title}</h2>
          <p className="font-light">{item.description}</p>
        </div>

        <div className="text-blue-850 flex items-center gap-4">
          <div className="flex items-center gap-2 font-medium text-black uppercase">
            <img src={item.button.svg} alt="" className="size-5" />
            <Link to={item.button.link}>{item.button.text}</Link>
          </div>
          <ArrowCircle />
        </div>
      </div>
    </div>
  )
}
