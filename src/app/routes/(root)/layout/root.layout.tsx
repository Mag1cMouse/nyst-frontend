import { NavLink } from 'react-router'

const contacts = [
  { label: 'location', srcOfImg: '/location.svg', text: '396 Zimmerman Rd, Harpersfield, NY, 12093' },
  { label: 'phone', srcOfImg: '/phone.svg', text: '917-615-5355' },
  { label: 'mail', srcOfImg: '/mail.svg', text: 'trackday@nyst.com' },
]

const navLinks = [
  { label: 'experience', href: '#' },
  { label: 'event registration', href: '#' },
  { label: 'membership', href: '#' },
  { label: 'rentals', href: '#' },
]

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex justify-center gap-6 h-max">
        {contacts.map(({ label, srcOfImg, text }) => (
          <span key={label} className="font-cormorant flex items-center gap-2 font-medium">
            <img src={srcOfImg} alt={label} className="h-5 w-4" /> {text}
          </span>
        ))}
      </div>

      
      <div className="sticky top-0 z-50 bg-white shadow-layout">
        <div className="flex items-center justify-between px-20 py-3">
          <img className="h-12" src="/logo.png" alt="logo" />
          <div className="flex gap-20 uppercase">
            {navLinks.map(({ label, href }) => (
              <NavLink key={label} to={href}>
                {label}
              </NavLink>
            ))}
          </div>
          <div className="flex gap-4.5">
            <img src="/profile.svg" alt="profile" className="h-5 w-5" />
            <img src="/shared.svg" alt="shared" className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  )
}
