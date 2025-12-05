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
    <div className="bg-gray-150 flex flex-col flex-wrap justify-center gap-4 px-4 py-10 text-white md:flex-row md:gap-5 md:py-15 lg:p-20">
      {servicesArray.map((item, index) => (
        <div
          key={index}
          className="font-oswald relative flex h-74.5 flex-col justify-end rounded-xl bg-cover bg-no-repeat px-4 py-6 md:basis-[calc(50%-0.625rem)] md:gap-4.5 lg:h-120 lg:gap-6"
          style={{ backgroundImage: `url(${item.backgroundImg})` }}
        >
          <div className="pointer-events-none absolute bottom-0 left-0 h-2/3 w-full rounded-xl bg-gradient-to-t from-black to-transparent" />
          <div className="z-10 flex flex-col gap-2">
            <h2 className="text-3.5xl lg:text-4.5xl font-semibold uppercase">{item.title}</h2>
            <p className="font-light md:text-base">{item.description}</p>
          </div>

          <div className="text-yellow-450 z-10 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <img className="size-6" src={item.calendarSvg} alt={item.calendarSvg} />
              <span className="font-medium text-white uppercase md:text-base">{item.link}</span>
            </div>
            <ArrowCircle />
          </div>
        </div>
      ))}
    </div>
  )
}
