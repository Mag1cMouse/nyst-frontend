import type { SharedTypes } from '@shared'
import { CircleArrow } from '../circle-arrow'

type Props = SharedTypes.Ui.PropsWithClassName<{
  servicesArray: TServicesArray[]
}>

type TServicesArray = {
  title: string
  description: string
  calendarSvg: string
  link: string
  arrowCircle: string
  backgroundImg: string
}

export const Services = (props: Props) => {
  const { className, servicesArray, ...restProps } = props

  return (
    <div className={className} {...restProps}>
      {servicesArray.map((item, index) => (
        <div
          key={index}
          className="font-oswald relative flex h-74.5 flex-col justify-end rounded-xl bg-cover bg-no-repeat px-4 py-6 md:basis-[calc(50%-0.625rem)] md:gap-4.5 lg:h-120 lg:gap-6"
          style={{ backgroundImage: `url(${item.backgroundImg})` }}
        >
          <div className="pointer-events-none absolute bottom-0 left-0 h-2/3 w-full rounded-xl bg-gradient-to-t from-black to-transparent" />
          <div className="z-10 flex flex-col gap-2">
            <h2 className="text-3.5xl lg:text-4.5xl font-semibold uppercase">{item.title}</h2>
            <p className="font-light md:text-base">{item.description}</p>
          </div>

          <div className="text-yellow-450 z-10 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <img className="size-6" src={item.calendarSvg} alt={item.calendarSvg} />
              <span className="font-medium text-white uppercase md:text-base">{item.link}</span>
            </div>
            <CircleArrow className="size-8 stroke-current" />
          </div>
        </div>
      ))}
    </div>
  )
}
