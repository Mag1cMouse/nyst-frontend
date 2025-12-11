import { CircleArrow, DescriptionCard, MiniTextBlock, ServiceCard, Services, Video } from '@shared/ui'
import { MiniSlider } from '@widgets/mini-slider/mini-slider'
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

const thirdTextBlockArr = [
  {
    answer: 'One-On-One Training',
    descriptions:
      'Our signature program is a full day of personalized, one-on-one coaching with our top-tier instructors. This exclusive experience is tailored to your riding style and focuses on highly personalized training to help you achieve your goals.',
  },
  {
    answer: 'Weekend Program',
    descriptions:
      'Prefer a more immersive approach? Our weekend program combines on-track and classroom instruction, offering a holistic approach to skill-building in just two days.',
  },
  {
    answer: 'Best Practices from the Pros',
    descriptions:
      'We believe in giving you the tools to succeed, no matter where you are on your motorcycling journey. Developed and led by riding experts, our courses emphasize motorcycling Best Practices that will elevate your skills and set you up for success—however you define it.',
  },
]

const fourthTextBlockArr = [
  {
    answer: 'Highly Personalized Training',
    descriptions:
      'Every rider is unique, and so is our approach. With a focus on individual coaching, we tailor every session to your needs, ensuring you leave with tangible improvements.',
  },
  {
    answer: 'Expert Coaches',
    descriptions:
      'Our instructors are among the best in the industry, bringing a wealth of experience and a passion for helping riders excel.',
  },
  {
    answer: 'Unmatched Flexibility',
    descriptions:
      'Our training isn’t constrained by a set number of sessions—it’s all about what you can handle and how far you want to go.',
  },
]

const fifthTextBlockArr = [
  {
    answer: 'Premier Racetrack',
    descriptions:
      'NYST is one of the most technical tracks in the Northeast, offering the perfect venue for competitive motorcycle and SuperMoto racing.',
  },
  {
    answer: 'Club Racing Atmosphere',
    descriptions:
      'Experience a friendly, supportive environment where racers of all levels come together to compete and improve.',
  },
  {
    answer: 'Monthly Weekend Racing',
    descriptions:
      'Events are held once a month on Saturday and Sunday throughout the season, making it easy to join the action on your weekends.',
  },
]

const sixthTextBlockArr = [
  {
    answer: 'Unwind in a Scenic Setting',
    descriptions:
      'Surrounded by the serene beauty of the Catskills, our venue provides the perfect environment to relax, recharge, and reconnect with your team.',
  },
  {
    answer: 'Excitement Meets Relaxation',
    descriptions:
      'Whether it’s the thrill of driving on our 2.2-mile road racing circuit or enjoying downtime with colleagues, our events strike the perfect balance between high-energy activities and peaceful <moments className=""></moments>',
  },
  {
    answer: 'Tailored Experiences',
    descriptions:
      'From exhilarating track challenges to casual group gatherings, every event is designed to match your team’s preferences and goals.',
  },
]

const eighthTextBlockArr = [
  {
    answer: 'High-Performance Fun',
    descriptions:
      'Give your team the opportunity to take on our world-class racetrack, where they’ll enjoy the excitement of high-speed driving in a safe, controlled environment.',
  },
  {
    answer: 'Nature-Focused Relaxation',
    descriptions:
      'After the thrill of the track, unwind with group activities, outdoor lounging areas, and breathtaking views of the surrounding mountains.',
  },
  {
    answer: 'Customizable Options',
    descriptions:
      'We’ll work with you to create the ideal mix of fun and relaxation, ensuring your event leaves a lasting impression.',
  },
]

const ninthTextBlockArr = [
  {
    answer: 'A chance to bond in a unique and exciting environment',
  },
  {
    answer: 'Time to relax, away from the office, in the heart of nature',
  },
  {
    answer: 'Thrilling activities that are both fun and stress-relieving',
  },
  {
    answer: 'Memories made in one of the most beautiful regions of the Northeast',
  },
]

const tenthTextBlockArr = [
  {
    answer: 'Unmatched Scenery',
    descriptions:
      'Say “I do” or celebrate life’s milestones against the backdrop of sweeping mountain views, vibrant skies, and fresh mountain air.',
  },
  {
    answer: 'Versatile Venuen',
    descriptions:
      'From weddings and birthdays to anniversaries and corporate milestones, NYST provides a one-of-a-kind setting for any special occasion.',
  },
  {
    answer: 'Exciting Activities',
    descriptions:
      'Add an extra layer of fun with our two world-class tracks, offering opportunities for thrilling driving experiences to entertain your guests.',
  },
]

const eleventhTextBlockArr = [
  {
    answer: 'Scenic Outdoor Spaces',
    descriptions: 'Host your event surrounded by nature’s beauty with panoramic views from the hilltops.',
  },
  {
    answer: 'Customizable Experiences',
    descriptions: 'Create a memorable day with options like track activities, gourmet catering, and more.',
  },
  {
    answer: 'Perfect Day-to-Night Transition',
    descriptions:
      'Start with a ceremony or celebration under the sun and transition to a magical evening beneath the stars, with stunning sunsets in between.',
  },
]

const twelfthTextBlockArr = [
  {
    answer: 'Versatile Grounds',
    descriptions:
      'Our expansive grounds are perfect for a wide range of activities, from accident recreations for insurance companies to movie sets and Instagram-worthy scenes.',
  },
  {
    answer: 'Professional-Grade Facilities',
    descriptions:
      'With two world-class racetracks and a range of outdoor spaces, we provide the perfect backdrop for high-speed tests, commercial shoots, and more.',
  },
  {
    answer: 'Customizable Options',
    descriptions:
      'We work with you to tailor the space and experience to meet your specific project needs, ensuring the best results every time.',
  },
]

const thirteenthTextBlockArr = [
  {
    answer: 'Car and Motorcycle Testing',
    descriptions:
      'Our tracks offer the perfect space for high-performance vehicle testing, providing a safe, controlled environment to push limits.',
  },
  {
    answer: 'Commercials & Movie Sets',
    descriptions:
      'Whether it’s an ad campaign or a feature film, NYST provides a dynamic and visually stunning location for your production.',
  },
  {
    answer: 'Accident Recreation',
    descriptions:
      'Our grounds are well-suited for accident simulations and insurance company recreations, providing a realistic and safe setting.',
  },
  {
    answer: 'Social Media & Content Creation',
    descriptions:
      'Looking for a picture-perfect spot for your next Instagram shoot? The breathtaking views and unique environment at NYST will make any content stand out.',
  },
]

const servicesArray = [
  {
    title: 'main track',
    description: 'Experience the Supreme Challenge',
    calendarSvg: 'calendarWhite.svg',
    link: 'signup',
    linkText: 'Sign Up',
    backgroundImg: '/summerTrack.png',
    arrowCircle: true,
  },
  {
    title: 'mini track',
    description: 'Take Your Riding to the Next Level',
    calendarSvg: 'calendarWhite.svg',
    link: 'signup',
    linkText: 'Sign Up',
    backgroundImg: '/miniTrack.png',
    arrowCircle: true,
  },
  {
    title: 'Put Tactical Shooting Range',
    description: 'Master Precision and Safety at Our Tactical Shooting Range!',
    calendarSvg: 'calendarWhite.svg',
    link: 'discovermore',
    linkText: 'contact for detail',
    backgroundImg: '/peopleWithGan.png',
    arrowCircle: true,
  },
  {
    title: 'airport',
    description: "New York Safety Track is more than just a racetrack—it's also an FAA-registered airport ",
    calendarSvg: 'calendarWhite.svg',
    link: 'discovermore',
    linkText: 'contact for detail',
    backgroundImg: '/blueAirplane.png',
    arrowCircle: true,
  },
]

const descriptionCardArr = [
  {
    circleArrow: false,
    img: '/redBike.png',
    title: 'Why Wait? Join the Action!',
    description: (
      <p className="font-oswald text-gray-850 font-light">
        A track day isn’t just an event; it’s an experience. It’s where skills are honed, limits are tested,
        and memories are made. Whether you’re chasing the thrill, improving your technique, or prepping for
        the podium, a track day at <span className="font-bold">NEW YORK SAFETY TRACK</span>{' '}
        <span className="font-normal">is the ultimate motorsport adventure.</span>
      </p>
    ),
  },
  {
    circleArrow: false,
    img: ['coaches.jpg', 'bikesWithAirplane.jpg', 'bikeOneC.jpg', 'peoples.jpg'],
    title: 'Take Your Riding to the Next Level',
    description:
      'Ready to transform your riding skills? The NYST Advanced Riding School is an immersive, in-person training experience designed to make you a better, faster, and more confident rider. Whether you’re aiming to master advanced techniques or refine your fundamentals, our courses are tailored to your specific goals.',
    subTitleText: 'school',
  },
  {
    circleArrow: false,
    img: 'coachOnBike.png',
  },
  {
    circleArrow: false,
    img: ['turquoiseBike.png', 'red-blueBike.jpg', 'whiteBike.jpg', 'blackBike.jpg'],
    title: 'MOTORCYCLE CLUB RACING AT NYST',
    description: (
      <p className="font-oswald font-light">
        <span className="font-oswald font-medium">
          Join the 400cc Light & SuperMoto Racing Series at NYST!
        </span>
        <br />
        Looking for thrilling motorcycle racing at a world-class racetrack? The 400cc Light & SuperMoto Racing
        Series at New York Safety Track (NYST) is your ultimate destination for club racing and
        high-adrenaline competition.
      </p>
    ),
    subTitleText: 'Racing',
  },
  {
    circleArrow: false,
    img: 'coachOnBike.png',
  },
  {
    circleArrow: false,
    img: ['twoBikesSpeed.png', 'coachOnBike.png'],
    title: 'Rejuvenate Your Team with Corporate Events at NYST',
    description:
      'Excitement Meets Relaxation. Whether it’s the thrill of driving on our 2.2-mile road racing circuit or riding a mini bike at 0.8-mile technical course or enjoying downtime with colleagues, our events strike the perfect balance between high-energy activities and peaceful moments.',
    subTitleText: 'Corporate events',
  },
  {
    circleArrow: false,
    img: ['nature.png', 'peoplesOnNature.png'],
  },
  {
    circleArrow: false,
    img: 'overSpeedBike.png',
  },
  {
    circleArrow: false,
    img: ['wedding.png', 'peopleChristman.png'],
    title: 'Host Your Special Event at New York Safety Track',
    description:
      'Make your next celebration truly unforgettable at New York Safety Track (NYST). Nestled atop the stunning 2,000-foot-high hills of the Catskills, our venue offers breathtaking views, picturesque sunrises and sunsets, and the perfect mix of serenity and excitement.',
    subTitleText: 'Weddings and Birthdays',
  },
  {
    circleArrow: false,
    img: 'firework.png',
  },
  {
    circleArrow: false,
    img: '/natureTrack.png',
    subTitleText: 'Special Projects',
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

const whatExpectArr = [
  {
    answer: 'Balanced Instruction',
    descriptions:
      'Our curriculum offers a mix of on-track sessions and off-track lessons, focusing on real-world techniques to enhance your riding. And the best part? The only limit is your stamina—you decide how far to push yourself..',
    img: {
      backgroundImg: 'twoRedBike.png',
    },
  },
  {
    answer: 'Ride Your Bike or Ours',
    descriptions:
      'Bring your street bike to the course, or rent one of our meticulously maintained motorcycles. We also offer rentals for protective gear, including branded Air Vests, so you’re fully equipped for the experience.',
    img: {
      backgroundImg: 'threeBike.png',
    },
  },
]

const HowItWorksArr = [
  {
    answer: 'Accumulate points at each race throughout the season.',
    img: {
      backgroundImg: 'whiteBike.png',
    },
  },
  {
    answer:
      'The final race takes place during our legendary Pig Roast Event in September, where top racers with the most points will receive great prizes and be celebrated as champions.',
    img: {
      backgroundImg: 'blackPitbike.png',
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

const serviceCardArray = [
  {
    header: 'Feel the thrill. Find your limits. See you on the track!',
    urlOfBgImage: '/pitbike.jpg',
    label: 'Register Here',
    link: 'eventreg',
    additionalImage: './finishWhite.svg',
  },
  {
    header: 'Get Started Today',
    text: 'Whether you’re looking to sharpen your skills, gain confidence, or simply enjoy the thrill of learning in a world-class environment, NYST Advanced Riding School is the ultimate destination for motorcyclists. ',
    urlOfBgImage: '/redBikeSpeed.png',
    link: 'eventreg',
    label: 'Book your spot now!',
  },
  {
    header: 'Who Can Join?',
    text: "Whether you're a seasoned racer or new to weekend racing, the 400cc Light & SuperMoto Racing Series welcomes you to sharpen your skills, enjoy the competition, and have fun on a professional track.",
    urlOfBgImage: '/threeBikesInRow.png',
    label: 'Register Here',
    link: 'eventreg',
  },
  {
    header: 'Book Your Team Event Today',
    text: 'Treat your team to an unforgettable day of relaxation, fun, and connection at New York Safety Track. Whether you’re celebrating a milestone, hosting a retreat, or just looking for a unique way to bond, NYST is the ultimate destination for corporate events.',
    urlOfBgImage: '/nystService.png',
    label: 'Register Here!',
    link: 'eventreg',
  },
  {
    header: 'Create Memories That Last a Lifetime',
    text: 'NYST is more than just a venue—it’s a destination where celebrations come alive. Whether it’s the most important day of your life or a special gathering with loved ones, we’ll help you craft an experience that leaves everyone in awe.',
    urlOfBgImage: '/fireworkNight.png',
    label: 'Register Here!',
    link: 'eventreg',
  },
  {
    header: 'Book Your Special Project Today',
    text: 'Whether you’re testing vehicles, filming a commercial, or working on something creative, NYST offers the perfect setting to bring your project to life.',
    urlOfBgImage: '/bikeOnBack.png',
    label: 'Register Here!',
    link: 'eventreg',
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
      <div className="relative h-41.5 md:h-79 lg:h-120">
        <Video
          item={videoArr}
          h2ClassName="lg:text-12xl/30 md:text-9xl text-5xl font-cormorant font-bold uppercase"
          divFullClassName="relative z-10 flex size-full flex-col items-center justify-center gap-4 p-6 text-center text-white bg-black/40"
          className="flex h-full items-center bg-black/40"
        />
      </div>

      {/* What to Expect on a Track Day? */}
      <div className="px-4 py-10 md:px-7.5 md:py-15 lg:p-20">
        <div className="flex w-full flex-col gap-6">
          <Services
            imgClassName="font-oswald relative flex h-110 md:h-80 flex-col justify-end rounded-xl bg-cover bg-no-repeat px-4 py-6 md:gap-4.5 lg:h-120 lg:gap-6"
            servicesArray={cardArr}
            className="flex flex-col gap-4 text-white lg:flex-row"
          />
          <div className="flex h-full flex-col gap-3">
            <div className="flex justify-between">
              <h3 className="font-oswald text-2xl/6">What to Expect on a Track Day?</h3>
              <CircleArrow
                text="sign up"
                className="text-blue-850 hidden items-center gap-2 uppercase md:flex"
                textClassName="text-black font-medium font-oswald"
                link="/eventreg"
              />
            </div>
            <div className="flex flex-col flex-wrap gap-5 gap-y-3 md:flex-row md:gap-y-10">
              {firstTextBlockArr.map(({ answer, descriptions }, index) => (
                <MiniTextBlock
                  key={index}
                  answer={answer}
                  descriptions={descriptions}
                  className="flex grow flex-col gap-2 md:w-4/10"
                />
              ))}
            </div>
          </div>
          <CircleArrow
            text="sign up"
            className="text-blue-850 flex items-center gap-2 uppercase md:hidden"
            textClassName="text-black font-medium font-oswald"
            link="/eventreg"
          />
        </div>
      </div>

      {/* Why You Should Attend a Track Day */}
      <div className="flex flex-col gap-5 bg-white px-4 py-10 md:px-7.5 md:py-15 lg:flex-row lg:px-20 lg:py-10">
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
        <div className="flex flex-col gap-5 md:flex-row">
          {twoImgArr.map(({ src, alt }, index) => (
            <img key={index} src={src} alt={alt} className="h-50 w-full lg:h-84" />
          ))}
        </div>
      </div>

      {/* What to bring*/}
      <div className="flex flex-col gap-3 px-4 py-10 md:px-7.5 md:py-15 lg:px-20 lg:py-10">
        <h3 className="font-oswald text-2xl/6">What to Bring?</h3>
        <div className="flex flex-col gap-5 md:flex-row">
          {whatBringArr.map(({ answer, descriptions, img }, index) => (
            <div key={index} className="h-65.5 flex-1">
              <Services
                servicesArray={img}
                imgClassName="font-oswald relative flex h-74.5 flex-col justify-end rounded-xl bg-cover bg-center bg-no-repeat px-4 py-6 md:gap-4.5 lg:h-65.5 lg:gap-6"
              >
                <MiniTextBlock answer={answer} descriptions={descriptions} className="z-30 text-white" />
              </Services>
            </div>
          ))}
        </div>
      </div>

      {/* Why Wait? Join the Action! */}
      <DescriptionCard
        item={descriptionCardArr[0]}
        className="flex flex-col-reverse items-center gap-5 bg-white px-4 py-10 md:px-7.5 md:py-15 lg:flex-row-reverse lg:px-20 lg:py-10"
      />

      {/* Feel the thrill. Find your limits. See you on the track! */}
      <div className="relative">
        <ServiceCard
          className="font-oswald flex flex-col items-center justify-center gap-6 bg-cover bg-no-repeat px-4 py-8 text-white md:px-7.5 lg:bg-center"
          item={serviceCardArray[0]}
        />
        <div className="absolute top-0 size-full bg-black/40"></div>
      </div>

      {/* Take Your Riding to the Next Level */}
      <DescriptionCard
        item={descriptionCardArr[1]}
        imgWrapperClassName="md:grid grid-cols-2 gap-5 hidden"
        imgItemClassName="h-84 w-full rounded-lg object-cover"
        className="flex flex-col-reverse items-center justify-center gap-5 px-4 py-10 md:px-7.5 md:py-15 lg:flex-row-reverse lg:px-20 lg:py-10"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">Why Choose NYST Advanced Riding School?</h3>
          {thirdTextBlockArr.map(({ answer, descriptions }, index) => (
            <MiniTextBlock
              key={index}
              answer={answer}
              descriptions={descriptions}
              className="flex flex-col gap-2"
            />
          ))}
        </div>
        <MiniSlider
          slides={descriptionCardArr[1].img}
          className="relative w-full overflow-hidden md:hidden"
        />
      </DescriptionCard>

      {/* What to Expect */}
      <div className="flex flex-col gap-3 bg-white px-4 py-10 md:py-15 lg:px-20 lg:py-10">
        <h3 className="font-oswald text-2xl/6">What to Expect</h3>
        <div className="flex flex-col gap-5 md:flex-row">
          {whatExpectArr.map(({ answer, descriptions, img }, index) => (
            <div key={index} className="h-65.5 flex-1">
              <Services
                servicesArray={img}
                imgClassName="font-oswald relative flex h-74.5 flex-col justify-end rounded-xl bg-cover bg-no-repeat px-4 py-6 md:basis-[calc(50%-0.625rem)] md:gap-4.5 lg:h-65.5 lg:gap-6"
              >
                <MiniTextBlock answer={answer} descriptions={descriptions} className="z-30 text-white" />
              </Services>
            </div>
          ))}
        </div>
      </div>

      {/* What Makes Us Different? */}
      <DescriptionCard
        item={descriptionCardArr[2]}
        className="flex flex-col-reverse items-center justify-center gap-5 px-4 py-10 md:px-7.5 md:py-15 lg:flex-row lg:px-20 lg:py-10"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">What Makes Us Different?</h3>
          {fourthTextBlockArr.map(({ answer, descriptions }, index) => (
            <MiniTextBlock
              key={index}
              answer={answer}
              descriptions={descriptions}
              className="flex flex-col gap-2"
            />
          ))}
        </div>
      </DescriptionCard>

      {/* Get Started Today */}
      <div className="relative">
        <ServiceCard
          className="font-oswald flex flex-col items-center justify-center gap-6 bg-cover bg-no-repeat px-4 py-8 font-normal text-white md:px-7.5 lg:bg-center"
          item={serviceCardArray[1]}
        >
          <p className="text-2xl">Take the first step toward mastering your ride</p>
        </ServiceCard>
        <div className="absolute top-0 size-full bg-black/40"></div>
      </div>

      {/* MOTORCYCLE CLUB RACING AT NYST */}
      <DescriptionCard
        item={descriptionCardArr[3]}
        className="flex flex-col-reverse items-center justify-center gap-5 bg-white px-4 py-10 md:px-7.5 md:py-15 lg:flex-row lg:px-20 lg:py-10"
        imgWrapperClassName="w-1/2 grid-cols-3 gap-3 lg:gap-6 md:grid hidden"
        imgItemClassName={(i) =>
          i === 0 ? 'col-span-3 h-84 w-full rounded-lg object-cover' : 'h-54 w-full rounded-lg object-cover'
        }
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">Why Choose NYST Advanced Riding School?</h3>
          {fifthTextBlockArr.map(({ answer, descriptions }, index) => (
            <MiniTextBlock
              key={index}
              answer={answer}
              descriptions={descriptions}
              className="flex flex-col gap-2"
            />
          ))}
        </div>
        <MiniSlider
          slides={descriptionCardArr[3].img}
          className="relative w-full overflow-hidden md:hidden rounded-2lg"
        />
      </DescriptionCard>

      {/* How It Works */}
      <div className="flex flex-col gap-3 px-4 py-10 md:px-7.5 md:py-15 lg:px-20 lg:py-10">
        <h3 className="font-oswald text-2xl/6">How It Works</h3>
        <div className="flex flex-col gap-5 lg:flex-row">
          {HowItWorksArr.map(({ answer, img }, index) => (
            <div key={index} className="h-65.5 flex-1">
              <Services
                servicesArray={img}
                imgClassName="font-oswald relative flex h-74.5 flex-col justify-end rounded-xl bg-cover bg-no-repeat px-4 py-6 md:basis-[calc(50%-0.625rem)] md:gap-4.5 lg:h-65.5 lg:gap-6"
              >
                <MiniTextBlock
                  answer={answer}
                  answerClassName="text-lg"
                  className="z-30 font-medium text-white"
                />
              </Services>
            </div>
          ))}
        </div>
      </div>

      {/* Who Can Join? */}
      <div className="relative">
        <ServiceCard
          className="font-oswald flex flex-col items-center justify-center gap-6 bg-cover bg-no-repeat px-4 py-8 text-white md:px-7.5 lg:bg-center"
          item={serviceCardArray[2]}
        />
        <div className="absolute top-0 size-full bg-black/40"></div>
      </div>

      {/* Rejuvenate Your Team with Corporate Events at NYST */}
      <DescriptionCard
        item={descriptionCardArr[5]}
        className="flex flex-col-reverse items-center justify-center gap-5 bg-white px-4 py-10 md:px-7.5 md:py-15 lg:flex-row-reverse lg:px-20 lg:py-10"
        imgWrapperClassName="grid w-1/2 grid-cols-1 gap-6"
        imgItemClassName="w-157.5 shrink-0 h-auto rounded-lg"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">Why NYST for Your Corporate Event?</h3>
          {sixthTextBlockArr.map(({ answer, descriptions }, index) => (
            <MiniTextBlock
              key={index}
              answer={answer}
              descriptions={descriptions}
              className="flex flex-col gap-2"
            />
          ))}
        </div>
      </DescriptionCard>

      {/* What to Expect */}
      <DescriptionCard
        item={descriptionCardArr[6]}
        className="flex flex-col-reverse items-center justify-center gap-5 px-4 py-10 md:px-7.5 md:py-15 lg:flex-row lg:px-20 lg:py-10"
        imgWrapperClassName="grid grid-cols-2 gap-6"
        imgItemClassName="w-full rounded-lg object-cover"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">What to Expect</h3>
          {eighthTextBlockArr.map(({ answer, descriptions }, index) => (
            <MiniTextBlock
              key={index}
              answer={answer}
              descriptions={descriptions}
              className="flex flex-col gap-2"
            />
          ))}
        </div>
      </DescriptionCard>

      {/* Why Your Team Will Love It */}
      <DescriptionCard
        item={descriptionCardArr[7]}
        className="flex flex-col-reverse justify-center gap-5 bg-white px-4 py-10 md:px-7.5 md:py-15 lg:flex-row-reverse lg:items-center lg:px-20 lg:py-10"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">What Makes Us Different?</h3>
          {ninthTextBlockArr.map(({ answer }, index) => (
            <MiniTextBlock key={index} answer={answer} className="flex flex-col gap-2" />
          ))}
        </div>
      </DescriptionCard>

      {/* Book Your Team Event Today */}
      <div className="relative">
        <ServiceCard
          className="font-oswald flex flex-col items-center justify-center gap-6 bg-cover bg-no-repeat px-4 py-8 font-normal text-white md:px-7.5 lg:bg-center"
          item={serviceCardArray[3]}
        >
          <p className="text-2xl">Contact us now to plan your custom experience!</p>
        </ServiceCard>
        <div className="absolute top-0 size-full bg-black/40"></div>
      </div>

      {/* Host Your Special Event at New York Safety Track */}
      <DescriptionCard
        item={descriptionCardArr[8]}
        className="flex flex-col-reverse items-center justify-center gap-5 bg-white px-4 py-10 md:px-7.5 md:py-15 lg:flex-row-reverse lg:px-20 lg:py-10"
        imgWrapperClassName="grid w-1/2 grid-cols-1 gap-6"
        imgItemClassName="w-157.5 shrink-0 h-auto rounded-lg"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">Why Choose NYST for Your Event?</h3>
          {tenthTextBlockArr.map(({ answer, descriptions }, index) => (
            <MiniTextBlock
              key={index}
              answer={answer}
              descriptions={descriptions}
              className="flex flex-col gap-2"
            />
          ))}
        </div>
      </DescriptionCard>

      {/* Event Highlights */}
      <DescriptionCard
        item={descriptionCardArr[9]}
        className="flex flex-col-reverse items-center justify-center gap-5 px-4 py-10 md:px-7.5 md:py-15 lg:flex-row lg:px-20 lg:py-10"
        imgItemClassName="w-1/2"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">Event Highlights</h3>
          {eleventhTextBlockArr.map(({ answer, descriptions }, index) => (
            <MiniTextBlock
              key={index}
              answer={answer}
              descriptions={descriptions}
              className="flex flex-col gap-2"
            />
          ))}
        </div>
      </DescriptionCard>

      {/* Create Memories That Last a Lifetime */}
      <div className="relative">
        <ServiceCard
          className="font-oswald flex flex-col items-center justify-center gap-6 bg-cover bg-no-repeat py-8 font-normal text-white md:px-7.5 lg:bg-center"
          item={serviceCardArray[4]}
        >
          <p className="text-2xl">Contact us today to start planning your unforgettable event at NYST!</p>
        </ServiceCard>
        <div className="absolute top-0 size-full bg-black/40"></div>
      </div>

      {/* Why Choose NYST for Your Special Project? */}
      <DescriptionCard
        item={descriptionCardArr[10]}
        className="flex flex-col-reverse items-center justify-center gap-5 bg-white px-4 py-10 md:px-7.5 md:py-15 lg:flex-row-reverse lg:px-20 lg:py-10"
        imgItemClassName="w-1/2"
      >
        <h3 className="font-oswald text-2xl">Why Choose NYST for Your Special Project?</h3>
        <div className="flex flex-col gap-4">
          {twelfthTextBlockArr.map(({ answer, descriptions }, index) => (
            <MiniTextBlock
              key={index}
              answer={answer}
              descriptions={descriptions}
              className="flex flex-col gap-2"
            />
          ))}
        </div>
      </DescriptionCard>

      {/* Perfect for: */}
      <div className="flex flex-col gap-3 px-4 py-10 md:p-7.5 md:py-15 lg:p-20">
        <h3 className="font-oswald text-2xl">Perfect for:</h3>
        <div className="flex flex-col flex-wrap gap-5 gap-y-10 lg:flex">
          {thirteenthTextBlockArr.map(({ answer, descriptions }, index) => (
            <MiniTextBlock
              key={index}
              answer={answer}
              descriptions={descriptions}
              className="flex w-full grow flex-col gap-2 lg:w-4/10"
            />
          ))}
        </div>
      </div>

      {/* Book Your Special Project Today */}
      <div className="relative">
        <ServiceCard
          className="font-oswald flex flex-col items-center justify-center gap-6 bg-cover bg-no-repeat py-8 font-normal text-white md:px-7.5 lg:bg-center"
          item={serviceCardArray[5]}
        >
          <p className="text-2xl">
            Contact us now to discuss your needs and book the venue for your next special project!
          </p>
        </ServiceCard>
        <div className="absolute top-0 size-full bg-black/40"></div>
      </div>

      {/* Services */}
      <Services
        imgClassName="font-oswald relative flex h-74.5 flex-col justify-end rounded-xl bg-cover bg-no-repeat px-4 py-6 md:basis-[calc(50%-0.625rem)] md:gap-4.5 lg:h-120 lg:gap-6"
        className="bg-gray-150 flex flex-col flex-wrap justify-center gap-4 px-4 py-10 text-white md:flex-row md:gap-5 md:py-15 lg:p-20"
        servicesArray={servicesArray}
      />
    </RootLayout>
  )
}
