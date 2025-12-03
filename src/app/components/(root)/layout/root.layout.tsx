import { useState } from 'react'
import { NavLink } from 'react-router'
import { RootLogin } from '../modal-window'

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

export function RootLayout(props: React.PropsWithChildren) {
  const { children } = props
  const [isShowModalWindow, setIsShowModalWindow] = useState(false)
  return (
    <>
      {isShowModalWindow && <RootLogin setIsShowModalWindow={setIsShowModalWindow} />}

      <header className="flex flex-col pb-6">
        <div className="flex h-max justify-center gap-6">
          {contacts.map(({ label, srcOfImg, text }) => (
            <span key={label} className="font-cormorant flex items-center gap-2 font-medium">
              <img src={srcOfImg} alt={label} className="h-5 w-4" /> {text}
            </span>
          ))}
        </div>

        <div className="shadow-layout sticky top-0 bg-white">
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
              <img
                src="/profile.svg"
                alt="profile"
                className="h-5 w-5"
                onClick={() => {
                  setIsShowModalWindow(!isShowModalWindow)
                }}
              />
              <img src="/shared.svg" alt="shared" className="size-5" />
            </div>
          </div>
        </div>
      </header>
      <main className="px-20">{children}</main>
      <footer></footer>
    </>
  )
}
