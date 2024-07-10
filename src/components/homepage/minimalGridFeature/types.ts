import { CardTypes } from '~/components/card/types'
import { richTextRawTypes } from '~/components/types'

export interface GridFeatureProps {
  title: string
  subTitle: richTextRawTypes[]
  cards: CardTypes[]
}
