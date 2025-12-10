import { NavLink } from 'react-router'
import { Contacts } from '@shared/ui'


const navLinks = [
  { label: 'experience', href: '/experience' },
  { label: 'event registration', href: '#' },
  { label: 'membership', href: '#' },
  { label: 'rentals', href: '#' },
]

type TProps = {
  setIsShowMobileMenu: (value: boolean) => void
}

export function MobileMenu(props: TProps) {
  const { setIsShowMobileMenu } = props

  const handleCloseModal = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsShowMobileMenu(false)
  }
  return (
    <div>
      <div className="fixed inset-0 z-200 bg-black/20" onClick={handleCloseModal}></div>

      <div className="fixed right-0 z-250 flex h-full max-h-screen w-54.5 flex-col justify-between bg-white px-7 py-4">
        <div className="flex flex-col items-end gap-4">
          <img onClick={handleCloseModal} src="/cross.svg" alt="close" className="size-3" />

          <div className="w-full">
            <div className="font-oswald flex flex-col gap-6 text-lg/7 uppercase">
              {navLinks.map(({ label, href }, index) => (
                <NavLink key={index} to={href}>
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Contacts />
        </div>
      </div>
    </div>
  )
}
