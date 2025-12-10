import type { SharedTypes } from '@shared'

type Props = SharedTypes.Ui.PropsWithClassName<{}>

export const ShareButton = (props: Props) => {
  const { className, ...restProps } = props


  const handleShare = async () => {
    const url = window.location.href

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
    <div className={className} {...restProps} onClick={handleShare} >
      <img src="/shared.svg" alt="shared" className="size-5 cursor-pointer" />
    </div>
  )
}
