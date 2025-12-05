type TServiceCard = {
  header: string
  text: string
  label: string
  urlOfBgImage: string
  additionalImage?: string
}

type TProps = {
  item: TServiceCard
}

export function ServiceCard(props: TProps) {
  const { item } = props
  return (
    <section
      className="font-oswald flex flex-col items-center justify-center gap-6 bg-cover bg-no-repeat px-4 py-8 text-white md:px-7.5 lg:bg-center"
      style={{ backgroundImage: `url(${item.urlOfBgImage})` }}
    >
      <div className="gap-2">
        <h2 className="text-4.5xl/15 max-w-320 text-center font-semibold uppercase">{item.header}</h2>
        <p className="text-center text-2xl/6.5">{item.text}</p>
      </div>
      <button className="text-yellow-450 flex items-center gap-4 leading-4.5">
        {item.additionalImage && <img className="size-6" src={item.additionalImage} alt="additionalImage" />}
        <span className="text-white uppercase">{item.label}</span>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-8 stroke-current"
        >
          <circle cx="16" cy="16" r="15.5" />
          <path d="M13.5 21L18.5 16L13.5 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  )
}
