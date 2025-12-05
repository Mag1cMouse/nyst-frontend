import { NavLink } from 'react-router'
import { RootContact } from '../layout'
import {} from './'

const navLinks = [
  { label: 'experience', href: '' },
  { label: 'event registration', href: '' },
  { label: 'membership', href: '' },
  { label: 'rentals', href: '' },
]

type TProps = {
  setIsShowMobileMenu: (value: boolean) => void
}

export function MobileMenu(props: TProps) {
  const { setIsShowMobileMenu } = props
  return (
    <div className="z-250 max-h-screen h-full fixed w-54.5 right-0 bg-white px-7 py-4 flex flex-col justify-between">
      <div className='flex flex-col items-end gap-4'>
				<img onClick={() => setIsShowMobileMenu(false)} src="/cross.svg" alt="close" className="size-3" />
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
        <RootContact />
      </div>
    </div>
  )
}
