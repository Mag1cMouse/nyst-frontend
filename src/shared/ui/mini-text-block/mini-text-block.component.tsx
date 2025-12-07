import type { SharedTypes } from '@shared'

type Props = SharedTypes.Ui.PropsWithClassName<{
  answer: string
  descriptions: string[] | string
}>

export const MiniTextBlock = (props: Props) => {
  const { className, answer, descriptions, ...restProps } = props

  const isArray = Array.isArray(descriptions)

  return (
    <div className={className} {...restProps}>
      <div className="font-oswald flex items-center gap-2">
        <div className="bg-yellow-450 h-5 w-2 rounded-full"></div>
        <h3 className="text-2xl/7">{answer}</h3>
      </div>

      {isArray ? (
        <ul className="flex flex-col gap-2">
          {descriptions.map((desc, index) => (
            <li
              key={index}
              className="font-oswald before:text-soft-gray relative pl-4 text-base/4 font-light before:absolute before:top-0 before:left-0 before:text-xs before:content-['•'] lg:left-3"
            >
              {desc}
            </li>
          ))}
        </ul>
      ) : (
        <span className="font-oswald w-full text-base/4 font-light">{descriptions}</span>
      )}
    </div>
  )
}
