import type { SharedTypes } from '@shared'
import { CircleArrow } from '../circle-arrow'
import { Subtitle } from '../subtitle'

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
          <Subtitle text={item.text} className="flex w-full gap-1.5" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="md:text-4.5xl/15 text-3xl font-semibold uppercase">{item.title}</h2>
          <p className="font-light">{item.description}</p>
        </div>

        <div className="flex items-center gap-4"></div>
        <CircleArrow
          link={item.button.link}
          text={item.button.text}
          svg={item.button.svg}
          textClassName="text-black"
          svgClassName="size-5"
          className="text-blue-850 flex items-center gap-2 font-medium uppercase"
        />
      </div>
    </div>
  )
}
