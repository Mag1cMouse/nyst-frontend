import { CircleArrow, ImgBlock, MiniTextBlock, Services, Video } from '@shared/ui'
import { RootLayout } from '~/components'

const videoArr = {
  srcVideo: '/experienceVideo.mp4',
  title: 'NYST',
  subTitle: 'Track Day',
  text: 'NEW YORK SAFETY TRACK',
}

const firstTextBlockArr = [
  {
    answer: 'Tailored Groups',
    descriptions:
      'Whether you’re a beginner or a seasoned pro, you’ll ride or drive with others at your skill level. Groups are divided into novice, intermediate, advanced, and expert, ensuring a comfortable and focused environment for everyone.',
  },
  {
    answer: 'Guided Learning',
    descriptions: [
      'Intermediate and advanced participants follow a coach in small groups for the first two morning sessions to sharpen their skills.',
      'Novice riders continue guided sessions behind the coach until lunchtime to build confidence.',
    ],
  },
  {
    answer: 'Action-Packed Sessions',
    descriptions:
      'Get ready for adrenaline-filled sessions, each lasting 15–20 minutes. You’ll have plenty of time to tackle the track, refine your technique, and chase that perfect lap.',
  },
  {
    answer: 'Personalized Coaching',
    descriptions:
      'Want to take it to the next level? Sign up for our one-on-one coaching program for tailored advice and rapid improvement.',
  },
]

const secondTextBlockArr = [
  {
    answer: 'Transform Your Skills',
    descriptions:
      'Learn to brake later, corner faster, and ride with total control. After a track day, you’ll feel like a whole new rider or driver.',
  },
  {
    answer: 'Feel the Rush',
    descriptions:
      'Experience the freedom to push your limits in a safe environment. This is your chance to ride or drive harder and faster than ever before—without worrying about speed traps or potholes.',
  },
  {
    answer: 'Prepare for Racing',
    descriptions:
      'If you dream of race day, a track day is the perfect training ground to fine-tune your technique and build confidence.',
  },
]

const whatBringArr = [
  {
    answer: 'Your Ride',
    descriptions:
      'Whether it’s a road-legal or track-prepared motorcycle or car, bring your vehicle ready to shine.',
    img: {
      backgroundImg: 'carsWithAirplane.png',
    },
  },
  {
    answer: 'Gear Up',
    descriptions:
      'Full protective gear is mandatory—but don’t worry, we’ve got rentals available if you need them',
    img: {
      backgroundImg: '/fastBike.jpg',
    },
  },
]

const cardArr = [
  {
    title: 'What is a Track Day?',
    description:
      'Imagine a day where you can fully focus on your ride—no traffic, no speed limits, no distractions. A track day is your chance to take your motorcycle or car to a real racetrack, where you can refine your braking, cornering, and handling at high speeds. It’s the ultimate playground for motorsport enthusiasts, offering both thrills and skill-building opportunities.',
    backgroundImg: '/blackCar.jpg',
    circleArrow: false,
  },
  {
    title: 'Is a Track Day Racing?',
    description:
      'Not exactly—but it’s even better! A track day isn’t about wide-open throttle and reckless riding. It’s about mastering your skills, pushing your limits, and unlocking your potential in a safe and controlled environment. With classroom sessions and instructor-led coaching, you’ll gain the confidence to ride or drive faster, smoother, and more skillfully than ever before.',
    backgroundImg: '/orangeBike.png',
    circleArrow: false,
  },
]

const twoImgArr = [
  {
    src: '/blueBike.png',
    alt: 'blue bike',
  },
  {
    src: '/summerRoad.png',
    alt: 'summer road',
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

      {/* What to Expect on a Track Day? */}
      <div className="p-20">
        <div className="flex w-full flex-col gap-6">
          <Services
            imgClassName="font-oswald relative flex h-74.5 flex-col justify-end rounded-xl bg-cover bg-no-repeat px-4 py-6 md:basis-[calc(50%-0.625rem)] md:gap-4.5 lg:h-120 lg:gap-6"
            servicesArray={cardArr}
            className="flex gap-4 text-white"
          />
          <div className="flex h-full flex-col gap-3">
            <div className="flex justify-between">
              <h3 className="font-oswald text-2xl/6">What to Expect on a Track Day?</h3>
              <CircleArrow
                text="sign up"
                className="text-blue-850 flex items-center gap-2 uppercase"
                textClassName="text-black font-medium"
                link="/signup"
              />
            </div>
            <div className="flex flex-wrap gap-5 gap-y-10">
              {firstTextBlockArr.map(({ answer, descriptions }, index) => (
                <MiniTextBlock
                  key={index}
                  answer={answer}
                  descriptions={descriptions}
                  className="flex w-4/10 grow flex-col gap-2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why You Should Attend a Track Day */}
      <div className="self- flex gap-5 bg-white px-20 py-10">
        <div className="flex flex-col justify-between gap-6 py-4">
          <h3 className="font-oswald text-2xl/6">Why You Should Attend a Track Day</h3>
          {secondTextBlockArr.map(({ answer, descriptions }, index) => (
            <MiniTextBlock
              key={index}
              answer={answer}
              descriptions={descriptions}
              className="flex flex-col gap-2"
            />
          ))}
        </div>
        <ImgBlock item={twoImgArr} className="flex h-84 shrink-0 gap-5" />
      </div>

      {/* What to bring*/}
      <div className="flex flex-col gap-3 px-20 py-10">
        <h3 className="font-oswald text-2xl/6">What to Bring?</h3>
        <div className="flex gap-5">
          {whatBringArr.map(({ answer, descriptions, img }, index) => (
            <div key={index} className="h-65.5 flex-1">
              <Services
                servicesArray={img}
                imgClassName="font-oswald relative flex h-74.5 flex-col justify-end rounded-xl bg-cover bg-center bg-no-repeat px-4 py-6 md:basis-[calc(50%-0.625rem)] md:gap-4.5 lg:h-65.5 lg:gap-6"
              >
                <MiniTextBlock answer={answer} descriptions={descriptions} className="z-30 text-white" />
              </Services>
            </div>
          ))}
        </div>
      </div>
    </RootLayout>
  )
}