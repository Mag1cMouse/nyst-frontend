import { Contacts, ShareButton } from '@shared/ui'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { RootLogin } from '../modal-window'
import { MobileMenu } from '../modal-window/root.mobile-menu'

const headerNavLinks = [
  { label: 'experience', href: '/experience' },
  { label: 'event registration', href: '/eventregistration' },
  { label: 'membership', href: '/membership' },
  { label: 'rentals', href: '/rentals' },
]

const footerNavLinks = [{ label: 'Local Experiences', href: '#' }]

const footerImageUrls = ['/facebook.svg', '/xter.svg', '/instagram.svg', '/youtube.svg', '/google.svg']

export function RootLayout(props: React.PropsWithChildren) {
  const { children } = props
  const [isShowModalWindow, setIsShowModalWindow] = useState(false)
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
  const [isShowShareButton, setIsShowShareButton] = useState(false)

  const { pathname } = useLocation()

  const segments = pathname.split('/').filter(Boolean)

  const breadcrumbs = [
    { label: 'MAIN', path: '/' },
    ...segments.map((seg, i) => ({
      label: seg.toUpperCase(),
      path: '/' + segments.slice(0, i + 1).join('/'),
    })),
  ]

  useEffect(() => {
    if (isShowModalWindow || isShowMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isShowModalWindow, isShowMobileMenu])

  return (
    <div className="bg-gray-150">
      {isShowModalWindow && <RootLogin setIsShowModalWindow={setIsShowModalWindow} />}
      {isShowMobileMenu && <MobileMenu setIsShowMobileMenu={setIsShowMobileMenu} />}
      <header className="sticky top-0 z-150 flex flex-col pb-6 md:top-[-3.5rem] lg:top-[-rem]">
        <Contacts className="hidden h-max justify-center gap-4.5 py-4.5 md:flex" />
        <div className="bg-white">
          <div className="shadow-layout flex w-full items-center justify-between bg-white px-4 py-2.5 md:px-20">
            <NavLink to="/">
              <img className="flex w-22 items-center" src="/logo.png" alt="logo" />
            </NavLink>

            <div className="font-oswald hidden w-max uppercase md:flex lg:gap-20">
              {headerNavLinks.map(({ label, href }) => (
                <NavLink
                  key={label}
                  to={href}
                  className={({ isActive }) =>
                    clsx('px-2.5 py-1', isActive && 'rounded-full bg-black text-white')
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <div className="relative flex gap-4.5 items-center">
              <ShareButton isShowShareButton={isShowShareButton} setIsShowShareButton={setIsShowShareButton} className={clsx('p-0.5', isShowShareButton ? "bg-gray-150/40 rounded-t-md " : "")} />
              <img
                src={!isShowModalWindow ? '/profile.svg' : 'yellowProfile.svg'}
                alt="profile"
                className="size-6 cursor-pointer"
                onClick={() => {
                  setIsShowModalWindow(!isShowModalWindow)
                }}
              />

              <img
                className="size-6.5 md:hidden"
                src="/menu.svg"
                alt="menu"
                onClick={() => {
                  setIsShowMobileMenu(!isShowMobileMenu)
                }}
              />
            </div>
          </div>
        </div>
      </header>
      {pathname !== '/' && (
        <span className="font-oswald flex gap-1 px-20 pb-6 font-light">
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              <NavLink to={crumb.path} className={index === breadcrumbs.length - 1 ? 'font-normal' : ''}>
                {crumb.label}
              </NavLink>
              {index < breadcrumbs.length - 1 && ' > '}
            </span>
          ))}
        </span>
      )}

      <main>{children}</main>
      <footer className="bg-white">
        <section className="flex flex-col items-center gap-6 py-6">
          <NavLink to="/">
            <img className="flex w-22 items-center" src="/logo.png" alt="logo" />
          </NavLink>
          <article className="relative flex w-full justify-between px-4 md:flex-col md:items-center md:gap-4">
            <div className="font-oswald flex shrink-0 flex-col gap-5 text-base uppercase md:flex-row md:text-lg/7">
              {headerNavLinks.map(({ href, label }) => (
                <NavLink key={label} to={href}>
                  {label}
                </NavLink>
              ))}
            </div>
            <img
              src="/bigLineDot.svg"
              alt="bigLineDot"
              className="absolute top-24 left-25 w-50 rotate-270 md:static md:rotate-0"
            />
            <div className="font-oswald flex flex-col gap-5 text-base uppercase md:flex-row md:text-lg/7">
              {footerNavLinks.map(({ href, label }) => (
                <NavLink key={label} to={href}>
                  {label}
                </NavLink>
              ))}
            </div>
          </article>
          <article className="flex w-full flex-col items-center gap-6 px-4">
            <Contacts className="flex w-full flex-col gap-4.5 md:w-max md:flex-row" />
            <div className="flex gap-2">
              {footerImageUrls.map((src) => (
                <img src={src} className="size-6.5" alt="" key={src} />
              ))}
            </div>
          </article>
        </section>
      </footer>
    </div>
  )
}
