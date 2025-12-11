import type { SharedTypes } from '@shared'

type Props = SharedTypes.Ui.PropsWithClassName<{
  answer: string
  descriptions?: string[] | string
  answerClassName?: string
}>

export const MiniTextBlock = (props: Props) => {
  const { className, answer, descriptions, answerClassName = 'text-2xl/7', ...restProps } = props

  const isArray = Array.isArray(descriptions)

  return (
    <div className={className} {...restProps}>
      <div className="font-oswald flex gap-2">
        <div className="bg-yellow-450 relative top-1.5 h-5 w-2 flex-none rounded-full" />
        <h3 className={answerClassName}>{answer}</h3>
      </div>

      {isArray ? (
        <ul className="flex flex-col gap-2">
          {descriptions.map((desc, index) => (
            <li
              key={index}
              className="font-oswald before:text-soft-gray relative pl-4 font-light before:absolute before:top-0 before:left-0 before:text-xs before:content-['•'] lg:left-3"
            >
              {desc}
            </li>
          ))}
        </ul>
      ) : (
        <span className="font-oswald w-full font-light">{descriptions}</span>
      )}
    </div>
  )
}
