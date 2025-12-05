import { ArrowCircle } from './main.arrowCircle'

const servicesArray: TServicesArray[] = [
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

type TServicesArray = {
  title: string
  description: string
  calendarSvg: string
  link: string
  arrowCircle: string
  backgroundImg: string
}

export function Services() {
  return (
    <div className="flex flex-wrap justify-center gap-5 md:px-4 md:py-6 lg:p-20 text-white">
      {servicesArray.map((item, index) => (
        <div
          key={index}
          className="flex h-120 basis-[calc(50%-0.625rem)] flex-col justify-end gap-6 rounded-xl bg-cover bg-no-repeat px-4 py-6"
          style={{ backgroundImage: `url(${item.backgroundImg})` }}
        >
          <div className="flex flex-col gap-2">
            <h2 className="md:text-3.5xl lg:text-4.5xl font-semibold uppercase">{item.title}</h2>
            <p className="md:text-base font-light">{item.description}</p>
          </div>

          <div className="text-yellow-450 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <img className="size-6" src={item.calendarSvg} alt={item.calendarSvg} />
              <span className="md:text-base  font-medium text-white uppercase">{item.link}</span>
            </div>
            <ArrowCircle />
          </div>
        </div>
      ))}
    </div>
  )
}
