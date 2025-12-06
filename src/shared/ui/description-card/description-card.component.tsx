import type { SharedTypes } from '@shared'
import { Link } from 'react-router'
import { CircleArrow } from '../circle-arrow'

type Props = SharedTypes.Ui.PropsWithClassName<{
  item: TDescriptionCardArray
}>

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

export const DescriptionCard = (props: Props) => {
  const { className, item, ...restProps } = props

  return (
    <div className={className} {...restProps}>
      <img src={item.img} alt="" className="rounded-2lg w-full lg:w-1/2" />
      <div className="font-oswald flex flex-col gap-6 lg:w-1/2">
        <div className="flex items-center gap-1.5">
          <img src={item.finishSvg} alt={item.finishSvg} className="size-6 text-black" />
          <img src={item.lineSvg} alt={item.lineSvg} className="w-15 md:w-15 lg:w-15" />
          <span className="uppercase">{item.text}</span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="md:text-4.5xl/15 text-3xl font-semibold uppercase">{item.title}</h2>
          <p className="font-light">{item.description}</p>
        </div>

        <div className="text-blue-850 flex items-center gap-4">
          <div className="flex items-center gap-2 font-medium text-black uppercase">
            <img src={item.button.svg} alt="" className="size-5" />
            <Link to={item.button.link}>{item.button.text}</Link>
          </div>
          <CircleArrow className='size-8 stroke-current'/>
        </div>
      </div>
    </div>
  )
}
