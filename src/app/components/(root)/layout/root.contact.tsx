type TProps = {
  label: string
  srcOfImg: string
  text: string
}

export function RootContact(props: TProps) {
  const { label, srcOfImg, text } = props
  return (
    <span key={label} className="font-cormorant flex items-center gap-2 font-medium text-base/4.5">
      <img src={srcOfImg} alt={label} className="h-5 w-4 flex  " /> {text}
    </span>
  )
}
