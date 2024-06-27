import { subHeadingRawTypes } from '~/components/types'

export interface HeroProps {
  heading: string
  subHeading: subHeadingRawTypes[]
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
