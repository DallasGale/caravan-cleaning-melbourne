import { ImageTypes } from '~/lib/sanity.queries'

export interface CardTypes extends ImageTypes {
  title: string
  paragraph: string
}
