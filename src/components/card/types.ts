import { ImageTypes } from '~/lib/sanity.queries'

export interface CardTypes extends ImageTypes {
  _key: string
  title: string
  paragraph: string
}
