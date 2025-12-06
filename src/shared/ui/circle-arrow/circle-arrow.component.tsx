import type { SharedTypes } from '@shared'

type Props = SharedTypes.Ui.PropsWithClassName<{
  // Add your props here
}>

export const CircleArrow = (props: Props) => {
  const { className } = props

  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="16" cy="16" r="15.5" />
      <path d="M13.5 21L18.5 16L13.5 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
