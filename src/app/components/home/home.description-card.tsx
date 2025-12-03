type TDescriptionCardArray = {
  text: string
  title: string
  description: string
  img: string
  button: {
    svg: string
    text: string
    next: string
    link: string
  }
}

const descriptionCardsArray = [
  {
    text: 'about',
    title: 'NEW YORK SAFETY TRACK: THE ULTIMATE RACETRACK IN UPSTATE NEW YORK',
    description:
      'Looking for the perfect motorcycle racetrack in New York? New York Safety Track is your go-to destination, just 2.5 hours from Manhattan in the breathtaking Catskill Mountains. Designed for motorsport enthusiasts, professional riders, and beginners alike, we offer a premier facility to hone your skills or enjoy a thrilling day on the track.',
    img: '/summerTrack.png',
    svg: "/finish.svg",
    button: {
      svg: '/calendar.svg',
      text: 'discover more',
      next: '/arrowCircle',
      link: '#',
    },
  },
]
export function DescriptionCard() {
  const card = descriptionCardsArray
  return (
    <div>
      <div className='flex'>
        <img src={card} alt="" />
      </div>
    </div>
  )
}
