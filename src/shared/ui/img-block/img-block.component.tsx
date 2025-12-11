import type { SharedTypes } from '@shared'

type TImagesArr = {
  src: string
  alt: string
}

type Props = SharedTypes.Ui.PropsWithClassName<{
  item: TImagesArr[]
}>

export const ImgBlock = (props: Props) => {
  const { className, item, ...restProps } = props
  return (
    <div className={className} {...restProps}>
      {item.map(({ src, alt }, index) => (
        <img key={index} src={src} alt={alt} className="size-full" />
      ))}
    </div>
  )
}
