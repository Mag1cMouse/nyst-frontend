import type { SharedTypes } from '@shared'
import { CircleArrow } from '../circle-arrow'

type Props = SharedTypes.Ui.PropsWithClassName<
  {
    servicesArray: TServicesArray[] | TServicesArray
    reactNode?: React.PropsWithChildren
    imgClassName: string
  } & React.PropsWithChildren
>

type TServicesArray = {
  title?: string
  description?: string
  backgroundImg: string
  calendarSvg?: string
  link?: string
  arrowCircle?: boolean
}

export const Services = (props: Props) => {
  const { className, servicesArray, children, imgClassName, ...restProps } = props

  return (
    <div className={className} {...restProps}>
      {!Array.isArray(servicesArray) ? (
        <div
          className={imgClassName}
          style={{ backgroundImage: `url(${servicesArray.backgroundImg})` }}
        >
          {children && children}
          <div className="pointer-events-none absolute bottom-0 left-0 h-2/3 w-full rounded-xl bg-gradient-to-t from-black to-transparent"></div>
        </div>
      ) : (
        servicesArray.map((item, index) => (
          <div
            key={index}
            className={imgClassName}
            style={{ backgroundImage: `url(${item.backgroundImg})` }}
          >
            <div className="pointer-events-none absolute bottom-0 left-0 h-2/3 w-full rounded-xl bg-gradient-to-t from-black to-transparent" />

            {children && children}

            {item.title && (
              <div className="z-10 flex flex-col gap-2">
                <h2 className="text-3.5xl lg:text-4.5xl font-semibold uppercase">{item.title}</h2>
                <p className="font-light md:text-base">{item.description}</p>
              </div>
            )}

            {item.arrowCircle && (
              <CircleArrow
                svgClassName="size-6"
                textClassName="text-white uppercase"
                svg={item.calendarSvg}
                link={item.link || '#'}
                text={item.link}
                className="text-yellow-450 z-10 flex items-center gap-4"
              />
            )}
          </div>
        ))
      )}
    </div>
  )
}
