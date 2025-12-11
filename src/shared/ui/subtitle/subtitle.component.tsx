import type { SharedTypes } from '@shared'

type Props = SharedTypes.Ui.PropsWithClassName<{
  text: string
}>

export const Subtitle = (props: Props) => {
  const { className = 'flex gap-2 font-oswald', text, ...restProps } = props

  return (
    <div className={className} {...restProps}>
      <img src="finishBlack.svg" alt="finish" className="size-6 text-black" />
      <img src="/lineDot.svg" alt="lineDot" className="w-15 md:w-15 lg:w-15" />
      <span className="uppercase">{text}</span>
    </div>
  )
}
