import { Advantages, Questions, Video } from '@shared/ui'
import { RootLayout } from '~/components'

const videoArr = {
  srcVideo: '/experienceVideo.mp4',
  title: 'NYST',
  subTitle: 'Track Day',
  text: 'NEW YORK SAFETY TRACK',
}

const QuestionCardArr = [
  {
    imgSrc: '/blackCar.jpg',
    question: 'What is a Track Day?',
    answer:
      'Imagine a day where you can fully focus on your ride—no traffic, no speed limits, no distractions. A track day is your chance to take your motorcycle or car to a real racetrack, where you can refine your braking, cornering, and handling at high speeds. It’s the ultimate playground for motorsport enthusiasts, offering both thrills and skill-building opportunities.',
  },
  {
    imgSrc: '/orangeBike.png',
    question: 'Is a Track Day Racing?',
    answer:
      'Not exactly—but it’s even better! A track day isn’t about wide-open throttle and reckless riding. It’s about mastering your skills, pushing your limits, and unlocking your potential in a safe and controlled environment. With classroom sessions and instructor-led coaching, you’ll gain the confidence to ride or drive faster, smoother, and more skillfully than ever before.',
  },
]

const questionTextArr = [
  {
    question: [''],
    text: ['Tailored Groups', 'Guided Learning', 'Action-Packed Sessions', 'Personalized Coaching'],
    answer: [
      'Whether you’re a beginner or a seasoned pro, you’ll ride or drive with others at your skill level. Groups are divided into novice, intermediate, advanced, and expert, ensuring a comfortable and focused environment for everyone.',
      'Intermediate and advanced participants follow a coach in small groups for the first two morning sessions to sharpen their skills. Novice riders continue guided sessions behind the coach until lunchtime to build confidence.',
      'Get ready for adrenaline-filled sessions, each lasting 15–20 minutes. You’ll have plenty of time to tackle the track, refine your technique, and chase that perfect lap.',
      'Want to take it to the next level? Sign up for our one-on-one coaching program for tailored advice and rapid improvement.',
    ],
  },
]


const advantagesArr = [
  {
    subTitle: ['School', ''],
    title: 'Take Your Riding to the Next Level',
    text: 'Ready to transform your riding skills? The NYST Advanced Riding School is an immersive, in-person training experience designed to make you a better, faster, and more confident rider. Whether you’re aiming to master advanced techniques or refine your fundamentals, our courses are tailored to your specific goals.',
    question: 'Why Choose NYST Advanced Riding School?',
    answer: ['One-On-One Training', 'Weekend Program', 'Best Practices from the Pros'],
    description: [
      'Our signature program is a full day of personalized, one-on-one coaching with our top-tier instructors. This exclusive experience is tailored to your riding style and focuses on highly personalized training to help you achieve your goals.',
      'Prefer a more immersive approach? Our weekend program combines on-track and classroom instruction, offering a holistic approach to skill-building in just two days.',
      'We believe in giving you the tools to succeed, no matter where you are on your motorcycling journey. Developed and led by riding experts, our courses emphasize motorcycling Best Practices that will elevate your skills and set you up for success—however you define it.',
    ],
    imgs: [],
  },
]

export default function Experience() {
  return (
    <RootLayout>
      <div className="relative h-120">
        <Video
          item={videoArr}
          h2ClassName="md:text-12xl/30 font-cormorant text-2xl font-bold uppercase"
          divFullClassName="relative z-10 flex size-full flex-col items-center justify-center gap-4 p-6 text-center text-white bg-black/40"
          className="flex h-full items-center bg-black/40"
        />
      </div>
      <Questions
        questionCards={QuestionCardArr}
        questionText={questionTextArr}
        className="bg-gray-150 relative flex flex-col gap-6 p-20"
      />
      <Advantages item={advantagesArr} />
    </RootLayout>
  )
}
