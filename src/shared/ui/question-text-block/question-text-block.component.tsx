import type { SharedTypes } from '@shared'

type Props = SharedTypes.Ui.PropsWithClassName<{
  text: string
  answer: string
  question: string
}>

export const QuestionTextBlock = (props: Props) => {
  const { className, text, answer, question, ...restProps } = props
  return (
    <div className={className} {...restProps}>
      <div className="flex flex-col">
        <h3>{question}</h3>
        <div className='flex gap-2 items-center'>
          <div className="bg-yellow-450 h-5 w-2 rounded-full"></div>
          <h3 className="text-lg/7 font-medium">{text}</h3>
        </div>
      </div>
      <p className="text-gray-850 text-base/4 font-light">{answer}</p>
    </div>
  )
}
