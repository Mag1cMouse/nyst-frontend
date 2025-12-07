import type { SharedTypes } from '@shared'
import { Link } from 'react-router'

type Props = SharedTypes.Ui.PropsWithClassName<{
  svg?: string
  text?: string
  link?: string
  svgClassName?: string
  textClassName?: string
}>

export const CircleArrow = ({
  className = 'flex gap-2 items-center shrink-0 text-yellow-450',
  svg,
  text,
  link = '#',
  svgClassName,
  textClassName = 'font-oswald font-medium text-white uppercase',
}: Props) => {
  const elements = [
    svg && <img key="img" className={svgClassName} src={svg} alt="icon" />,
    text && (
      <span key="text" className={textClassName}>
        {text}
      </span>
    ),
    <svg
      key="svg"
      className="size-8 stroke-current"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="15.5" />
      <path d="M13.5 21L18.5 16L13.5 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
  ].filter(Boolean)

  return (
    <Link to={link} className={className}>
      {elements}
    </Link>
  )
}
