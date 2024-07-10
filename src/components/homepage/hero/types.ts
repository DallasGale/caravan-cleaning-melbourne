import { richTextRawTypes } from '~/components/types'

export interface HeroProps {
  heading: string
  subHeading: richTextRawTypes[]
  primaryCta: {
    label: string
    link: string
  }
  backgroundImage: {
    asset: {
      url: string
    }
  }
}
