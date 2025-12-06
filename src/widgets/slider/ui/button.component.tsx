import { Link } from 'react-router'

type TProps = React.PropsWithChildren<{
  svg?: string
  icon: string
  withFirstImg?: boolean
}>

export function Button(props: TProps) {
  const { icon, svg, withFirstImg, children } = props
  return (
    <>
      <button className="font-oswald flex shrink-0 items-center gap-4 uppercase">
        <div className="flex items-center gap-1">
          {withFirstImg && <img src={svg} alt="" className="size-6" />}
          <Link to="#">{children}</Link>
        </div>
        <img src={icon} alt={icon} className="size-8" />
      </button>
    </>
  )
}
