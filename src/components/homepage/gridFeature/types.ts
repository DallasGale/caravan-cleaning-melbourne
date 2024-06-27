import { CardTypes } from '~/components/card/types'
import { subHeadingRawTypes } from '~/components/types'

export interface GridFeatureProps {
  title: string
  subTitle: subHeadingRawTypes[]
  cards: CardTypes[]
}
