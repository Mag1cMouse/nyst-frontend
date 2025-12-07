import { DescriptionCard, ServiceCard, Services, Video } from '@shared/ui'
import { SliderUi } from '@widgets/slider'
import clsx from 'clsx'
import { Fragment } from 'react/jsx-runtime'
import { RootLayout } from '~/components'

const descriptionCardsArray = [
  {
    text: 'about',
    title: 'NEW YORK SAFETY TRACK: THE ULTIMATE RACETRACK IN UPSTATE NEW YORK',
    description:
      'Looking for the perfect motorcycle racetrack in New York? New York Safety Track is your go-to destination, just 2.5 hours from Manhattan in the breathtaking Catskill Mountains. Designed for motorsport enthusiasts, professional riders, and beginners alike, we offer a premier facility to hone your skills or enjoy a thrilling day on the track.',
    img: '/summerTrack.png',
    finishSvg: '/finishBlack.svg',
    lineSvg: '/lineDot.svg',
    button: {
      svg: '/calendar.svg',
      text: 'discover more',
      next: '/arrowCircle.svg',
      link: '#',
    },
  },
  {
    text: 'main track',
    title: 'Experience the Supreme Challenge',
    description:
      'Our main track is a 2.2-mile-long technical masterpiece with 18 challenging turns and 450 feet of elevation changes. Widely regarded as one of the most demanding and exciting racetracks in the Northeast, its perfect for riders and drivers seeking a high-adrenaline experience.',
    img: '/schematicTrack.png',
    finishSvg: '/finishBlack.svg',
    lineSvg: '/lineDot.svg',
    button: {
      svg: '/calendar.svg',
      text: 'discover more',
      next: '/arrowCircle.svg',
      link: '#',
    },
  },
  {
    text: 'mini track',
    title: 'Unleash Your Skills on Our Dynamic 0.8-Mile Mini Track!',
    description:
      'For those looking for versatility, our mini track spans 0.8 miles with over 25 turns and 85 feet of elevation changes, offering multiple configurations for training, practice, and fun',
    img: '/miniTrack.png',
    finishSvg: '/finishBlack.svg',
    lineSvg: '/lineDot.svg',
    button: {
      svg: '/calendar.svg',
      text: 'discover more',
      next: '/arrowCircle.svg',
      link: '#',
    },
  },
  {
    text: 'airport',
    title: 'NYST is NY02. FLY-IN AND ENJOY YOUR DAY WITH US.',
    description:
      "New York Safety Track is more than just a racetrack—it's also an FAA-registered airport (identifier: NY02). The 2,400-foot-long, 40-foot-wide runway features a top-notch surface and can accommodate most light piston and turbine aircraft with prior reservation.",
    img: '/trackWithJat.jpg',
    finishSvg: '/finishBlack.svg',
    lineSvg: '/lineDot.svg',
    button: {
      svg: '/calendar.svg',
      text: 'discover more',
      next: '/arrowCircle.svg',
      link: '#',
    },
  },
  {
    text: 'Tactical Shooting Range',
    title: 'Master Precision and Safety at Our Tactical Shooting Range!',
    description:
      'We proudly offer a state-of-the-art tactical shooting range designed to deliver the ultimate training experience. For New York State CCW license holders, we provide specialized safety courses conducted by NRA-certified instructors, ensuring unmatched standards of safety and professionalism.',
    img: '/peopleWithGan.png',
    finishSvg: '/finishBlack.svg',
    lineSvg: '/lineDot.svg',
    button: {
      svg: '/calendar.svg',
      text: 'discover more',
      next: '/arrowCircle.svg',
      link: '#',
    },
  },
]

const serviceCardArray = [
  {
    header: 'Sign Up For Newsletter',
    text: 'Stay up to date with the latest news from the world of NYST.',
    label: 'subscribe',
    urlOfBgImage: '/cinemaBike.png',
  },
  {
    header:
      "Whether you're a motorcycle enthusiast, motorsport professional, or someone seeking a unique training experience",
    text: 'NEW YORK SAFETY TRACK is the ultimate destination in New York',
    label: 'start your engines',
    additionalImage: '/finishWhite.svg',
    urlOfBgImage: '/greenBike.png',
  },
]

const servicesArray = [
  {
    title: 'Track Day',
    description:
      'Learn to brake later, corner faster, and ride with total control. After a track day, you’ll feel like a whole new rider or driver.',
    calendarSvg: 'calendarWhite.svg',
    link: 'Sign Up',
    arrowCircle: '/arrowCircle',
    backgroundImg: '/cars.jpg',
  },
  {
    title: 'School',
    description: 'Take Your Riding to the Next Level',
    calendarSvg: 'calendarWhite.svg',
    link: 'Sign Up',
    arrowCircle: '/arrowCircle',
    backgroundImg: '/peoples.jpg',
  },
  {
    title: 'Racing',
    description: 'Motocycle club Racing at NYST',
    calendarSvg: 'calendarWhite.svg',
    link: 'discover more',
    arrowCircle: '/arrowCircle',
    backgroundImg: '/bike.jpg',
  },
  {
    title: 'Corporate event',
    description: 'Excitement Meets Relaxation',
    calendarSvg: 'calendarWhite.svg',
    link: 'discover more',
    arrowCircle: '/arrowCircle',
    backgroundImg: '/bike.jpg',
  },
]

const videoArr = {
  srcVideo: '/homeVideo.mp4',
  title: 'OctoberFAST Exotics at New York Safety Track',
}

export default function IndexRoute() {
  return (
    <RootLayout>
      <div className="bg-gray-50 px-4 md:px-7.5 lg:px-20">
        <SliderUi.Slider></SliderUi.Slider>
      </div>
      {descriptionCardsArray.map((item, index) => (
        <Fragment key={index}>
          {index === 2 && (
            <ServiceCard
              className="font-oswald flex flex-col items-center justify-center gap-6 bg-cover bg-no-repeat px-4 py-8 text-white md:px-7.5 lg:bg-center"
              item={serviceCardArray[0]}
            />
          )}
          <DescriptionCard
            className={clsx(
              'flex w-full flex-col-reverse justify-between gap-5 px-4 py-10 md:px-7.5 md:py-15 lg:flex-row lg:items-center lg:p-20',
              index % 2 === 0 ? 'flex-col-reverse lg:flex-row-reverse' : 'bg-white',
            )}
            item={item}
          />
          {index === 3 && (
            <Video
              item={videoArr}
              h2ClassName="md:text-4.5xl font-oswald flex-wrap text-2xl font-semibold uppercase md:w-140"
              divFullClassName="relative z-10 flex size-full flex-col items-center justify-center gap-4 p-6 text-center text-white"
              className="relative flex h-68 w-full flex-col overflow-hidden md:h-120"
            />
          )}
          {index === 4 && (
            <ServiceCard
              className="font-oswald flex flex-col items-center justify-center gap-6 bg-cover bg-no-repeat px-4 py-8 text-white md:px-7.5 lg:bg-center"
              item={serviceCardArray[1]}
            />
          )}
        </Fragment>
      ))}
      <Services
        className="bg-gray-150 flex flex-col flex-wrap justify-center gap-4 px-4 py-10 text-white md:flex-row md:gap-5 md:py-15 lg:p-20"
        servicesArray={servicesArray}
      />
    </RootLayout>
  )
}
