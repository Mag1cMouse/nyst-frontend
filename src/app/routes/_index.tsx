import { Fragment } from 'react/jsx-runtime'
import { DescriptionCard, RootLayout, ServiceCard, Services, Slider, VideoPlayer } from '~/components'

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

export default function IndexRoute() {
  return (
    <RootLayout>
      <div className="bg-gray-50 px-4 md:px-7.5 lg:px-20">
        <Slider />
      </div>
      {descriptionCardsArray.map((item, index) => (
        <Fragment key={index}>
          {index === 2 && <ServiceCard item={serviceCardArray[0]} />}
          <DescriptionCard item={item} index={index} />
          {index === 3 && <VideoPlayer />}
          {index === 4 && <ServiceCard item={serviceCardArray[1]} />}
        </Fragment>
      ))}
      <Services />
    </RootLayout>
  )
}
