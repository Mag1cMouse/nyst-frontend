import type { SharedTypes } from '@shared'

type TQuestionCard = {
  question: string
  answer: string
  imgSrc: string
}

type TQuestionText = {
  question: string
  text: string[]
  answer: string[]
}

type Props = SharedTypes.Ui.PropsWithClassName<{
  questionCards: TQuestionCard[]
  questionText: TQuestionText[]
}>

export const Questions = (props: Props) => {
  const { className, questionCards, questionText, ...restProps } = props

  return (
    <div className={className} {...restProps}>
      {/* Верхний блок — question один раз */}
      {questionText.map(({ question, answer, text }, index) => (
        <div key={index} className="font-oswald flex flex-col gap-6">
          {/* Заголовок */}
          <h3 className="font-oswald text-2xl/6">{question[0]}</h3>

          {/* Ответы с текстом */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {answer.map((ans, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h4 className="font-semibold">{text[i]}</h4>
                <p className="text-gray-850 font-light">{ans}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
