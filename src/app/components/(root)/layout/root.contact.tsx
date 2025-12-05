
const contacts = [
  { label: 'location', srcOfImg: '/location.svg', text: '396 Zimmerman Rd, Harpersfield, NY, 12093' },
  { label: 'phone', srcOfImg: '/phone.svg', text: '917-615-5355' },
  { label: 'mail', srcOfImg: '/mail.svg', text: 'trackday@nyst.com' },
]

export function RootContact() {
  return (
    <>
      {contacts.map(({ label, srcOfImg, text }) => (
        <span key={label} className="font-cormorant flex items-center gap-2 text-base/4.5 font-medium">
          <img src={srcOfImg} alt={label} className="flex h-5 w-4" /> {text}
        </span>
      ))}
    </>
  )
}
