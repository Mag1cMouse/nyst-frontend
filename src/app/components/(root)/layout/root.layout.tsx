import { useState } from 'react'
import { NavLink } from 'react-router'
import { RootLogin } from '../modal-window'
import { RootContact } from './root.contact'

const contacts = [
  { label: 'location', srcOfImg: '/location.svg', text: '396 Zimmerman Rd, Harpersfield, NY, 12093' },
  { label: 'phone', srcOfImg: '/phone.svg', text: '917-615-5355' },
  { label: 'mail', srcOfImg: '/mail.svg', text: 'trackday@nyst.com' },
]

const headerNavLinks = [
  { label: 'experience', href: '#' },
  { label: 'event registration', href: '#' },
  { label: 'membership', href: '#' },
  { label: 'rentals', href: '#' },
]

const footerNavLinks = [
  { label: 'Local Experiences', href: '#' },
  { label: 'Terms and privacy', href: '#' },
]

const footerImageUrls = ['/facebook.svg', '/xter.svg', '/instagram.svg', '/youtube.svg', '/google.svg']

export function RootLayout(props: React.PropsWithChildren) {
  const { children } = props
  const [isShowModalWindow, setIsShowModalWindow] = useState(false)
  return (
    <>
      {isShowModalWindow && <RootLogin setIsShowModalWindow={setIsShowModalWindow} />}

      <header className="flex flex-col bg-gray-50 pb-6">
        <div className="flex h-max justify-center gap-2 py-4.5">
          {contacts.map(({ label, srcOfImg, text }, index) => (
            <RootContact key={index} label={label} srcOfImg={srcOfImg} text={text} />
          ))}
        </div>

        <div className="shadow-layout sticky top-0 bg-white">
          <div className="flex items-center justify-between px-20 py-2.5">
            <img className="flex w-22 items-center" src="/logo.png" alt="logo" />
            <div className="flex w-max uppercase lg:gap-20 font-oswald">
              {headerNavLinks.map(({ label, href }) => (
                <NavLink key={label} to={href} className="px-2.5 py-1">
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
      <main>{children}</main>
      <footer>
        <section className="flex flex-col items-center gap-6 py-6">
          <img src="/logo.png" className="h-12.5 w-22" alt="logo" />
          <article className="flex flex-col items-center gap-4">
            <div className="flex gap-5 text-lg/7 uppercase font-oswald">
              {headerNavLinks.map(({ href, label }) => (
                <NavLink key={label} to={href}>
                  {label}
                </NavLink>
              ))}
            </div>
            <img src="/bigLineDot.svg" alt="bigLineDot" />
            <div className="flex gap-5 text-lg/7 uppercase font-oswald">
              {footerNavLinks.map(({ href, label }) => (
                <NavLink key={label} to={href}>
                  {label}
                </NavLink>
              ))}
            </div>
          </article>
          <article className="flex flex-col items-center gap-6">
            <div className="flex gap-4.5">
              {contacts.map(({ label, srcOfImg, text }, index) => (
                <RootContact key={index} label={label} srcOfImg={srcOfImg} text={text} />
              ))}
            </div>
            <div className="flex gap-2">
              {footerImageUrls.map((src) => (
                <img src={src} className="size-6.5" alt="" key={src} />
              ))}
            </div>
          </article>
        </section>
      </footer>
    </>
  )
}
