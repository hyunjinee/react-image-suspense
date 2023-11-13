import { loadImage } from './utils'

export const Image = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  loadImage(props.src as string).read()
  return <img {...props} />
}

export const SuspenseImage = Image
export const ImageSuspense = Image
