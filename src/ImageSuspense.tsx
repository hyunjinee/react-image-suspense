import { loadImage } from './utils'

export const ImageSuspense = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => {
  loadImage(props.src as string).read()

  return <img {...props} />
}

export const SuspenseImage = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => {
  loadImage(props.src as string).read()
  return <img {...props} />
}
