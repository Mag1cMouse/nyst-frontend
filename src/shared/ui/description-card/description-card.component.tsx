import type { SharedTypes } from '@shared'
import clsx from 'clsx'
import { CircleArrow } from '../circle-arrow'
import { Subtitle } from '../subtitle'

type TDescriptionCardArray = {
  subTitleText?: string
  title?: string
  description?: React.ReactNode | string
  img: string | string[]
  circleArrow?: boolean
  button?: {
    svg?: string
    text: string
    link: string
  }
}

type Props = SharedTypes.Ui.PropsWithClassName<{
  item: TDescriptionCardArray
}> & {
  children?: React.ReactNode
  imgWrapperClassName?: string
  imgItemClassName?: string | ((index: number) => string)
}

export const DescriptionCard = ({
  className,
  item,
  children,
  imgWrapperClassName,
  imgItemClassName,
  ...restProps
}: Props) => {
  return (
    <div className={className} {...restProps}>
      {Array.isArray(item.img) ? (
        <div className={clsx('w-full lg:w-1/2', imgWrapperClassName)}>
          {item.img.map((src, index) => {
            const dynamicClass =
              typeof imgItemClassName === 'function' ? imgItemClassName(index) : imgItemClassName

            return <img key={index} src={src} alt="" className={clsx(dynamicClass)} />
          })}
        </div>
      ) : (
        <img src={item.img} alt="" className={clsx('rounded-2lg w-full lg:w-1/2', imgItemClassName)} />
      )}

      <div className="font-oswald flex flex-col gap-6 lg:w-1/2">
        {item.subTitleText && (
          <div className="flex items-center gap-1.5">
            <Subtitle text={item.subTitleText} className="flex w-full gap-1.5" />
          </div>
        )}

        {(item.title || item.description) && (
          <div className="flex flex-col gap-2">
            {item.title && (
              <h2 className="md:text-4.5xl/15 text-3xl font-semibold uppercase">{item.title}</h2>
            )}
            {item.description && <div className="font-light">{item.description}</div>}
          </div>
        )}

        {children}

        {item.button && (
          <CircleArrow
            link={item.button.link}
            text={item.button.text}
            svg={item.button.svg}
            textClassName="font-oswald text-black font-medium"
            svgClassName="size-5"
            className="text-blue-850 flex items-center gap-2 font-medium uppercase"
          />
        )}
      </div>
    </div>
  )
}
