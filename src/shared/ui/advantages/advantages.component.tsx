import type { SharedTypes } from '@shared'
import { QuestionTextBlock } from '../question-text-block'
import { Subtitle } from '../subtitle'

type TAdvantages = {
  title?: string
  text?: string
  question: string
  answer: string[]
  description: string[]
  imgs: string[]
  subTitle: string[]
}

type Props = SharedTypes.Ui.PropsWithClassName<{
  item: TAdvantages[]
}>

export const Advantages = (props: Props) => {
  const { className, item, ...restProps } = props

  return (
    <div className={className} {...restProps}>
      {item.map(({ subTitle, title, text, question, answer, description, imgs }, itemIndex) => (
        <div key={itemIndex} className="font-oswald flex flex-col gap-8">
          {subTitle?.map((st, stIndex) => (
            <div key={stIndex} className=''>
              <Subtitle className="flex gap-2" text={st} />

              <div className="mt-2 flex flex-col gap-2 w-1/2">
                {title && <h2 className="text-4.5xl/15 font-semibold uppercase">{title}</h2>}
                {text && <p className="text-gray-850 font-light">{text}</p>}
              </div>

              <h3 className="font-semibold mt-4">{question}</h3>

              <div className="mt-4 flex flex-col gap-4 w-1/2">
                {answer.map((ans, i) => (
                  <QuestionTextBlock
                    key={i}
                    question={question}
                    answer={ans}
                    text={description[i] ?? ''}
                    className="flex flex-col gap-2"
                  />
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                {imgs.map((imgSrc, i) => (
                  <img key={i} src={imgSrc} alt="" className="w-full md:w-1/2 lg:w-1/3" />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
