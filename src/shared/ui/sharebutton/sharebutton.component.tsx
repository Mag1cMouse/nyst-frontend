import type { SharedTypes } from '@shared'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router'

type Props = SharedTypes.Ui.PropsWithClassName<{
  isShowShareButton: boolean
  setIsShowShareButton: (value: boolean) => void
}>

const footerImageUrls = [
  { src: '/facebook.svg', href: '#' },
  { src: '/xter.svg', href: '#' },
  { src: '/instagram.svg', href: '#' },
  { src: '/youtube.svg', href: '#' },
  { src: '/google.svg', href: '#' },
]

// пошел на завод
export const ShareButton = (props: Props) => {
  const { className, isShowShareButton, setIsShowShareButton, ...restProps } = props

  const url = useLocation().pathname

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url,
      })
    } else {
      navigator.clipboard.writeText(url)
    }
  }

  return (
    <div className={clsx(className)} {...restProps} onClick={handleShare}>
      <img
        src="/shared.svg"
        alt="shared"
        className={clsx('size-5.5 cursor-pointer pl-1', className)}
        onClick={() => setIsShowShareButton(!isShowShareButton)}
      />
      {isShowShareButton && (
        <div className="bg-gray-150/40 absolute right-10.5 flex h-40 flex-col items-center justify-between gap-1 rounded-b-full pt-1">
          {footerImageUrls.map(({ src, href }, index) => (
            <Link to={href} key={index}>
              <img src={src} className="size-6.5" />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
