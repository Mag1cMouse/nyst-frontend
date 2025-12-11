import type { SharedTypes } from '@shared'
import { CircleArrow } from '../circle-arrow'

type Props = SharedTypes.Ui.PropsWithClassName<{
  item: TServiceCard
}> &
  React.PropsWithChildren

type TServiceCard = {
  header: string
  text?: string
  label?: string
  link?: string
  urlOfBgImage: string
  additionalImage?: string
}

export const ServiceCard = (props: Props) => {
  const { className, item, children, ...restProps } = props

  return (
    <div>
      <section className={className} {...restProps} style={{ backgroundImage: `url(${item.urlOfBgImage})` }}>
        <div className="z-30 flex flex-col items-center gap-2 text-center md:px-5 lg:px-20">
          <h2 className="text-4.5xl/15 max-w-7xl text-center font-semibold uppercase">{item.header}</h2>
          <div className="flex flex-col items-center gap-5">
            {item.text && <p className="text-center text-2xl/8">{item.text}</p>}
            {children && children}
          </div>
        </div>

        <button className="text-yellow-450 z-30 flex items-center gap-4 leading-4.5">
          <CircleArrow svg={item.additionalImage} text={item.label} link={item.link || '#'} />
        </button>
      </section>
    </div>
  )
}
