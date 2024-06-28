import groq from 'groq'
import { type SanityClient } from 'next-sanity'
import { CardTypes } from '~/components/card/types'
import { CtaProps } from '~/components/cta/types'
import { HeroProps } from '~/components/homepage/hero/types'
import { subHeadingRawTypes } from '~/components/types'

export const homepageQuery = groq`*[_type == "homepage"][0]{
  hero {
     primaryCta {
      link,
      label
    },
    heading,
    subHeading,
    backgroundImage {
      asset->{
        url
      }
    }
  },
  sections[] {
    _type,
    _key,
    title,
    darkMode,
    backgroundImage {
      asset->{
        url
      }
  },
    subTitle,
    cards[] {
      _key,
      title,
      paragraph,
      imageAlt,
      image {
        asset-> {
          url
        }
      }
    },
    primaryCta {
      link,
      label
    },
    secondaryCta {
      link,
      label
    },
    details[] {
      _type,
      style,
      _key,
      listItem,
      level,
      children[] {
        _type,
        marks,
        text
      }
    }
  }
}`

export type SectionTypes = {
  _key: string
  _type: 'serviceFeature' | 'gridFeature'
  title: string
  darkMode: boolean
  subTitle: subHeadingRawTypes[]
  primaryCta: CtaProps
  secondaryCta?: CtaProps
  cards: CardTypes[]
  backgroundImage?: {
    asset: {
      url: string
    }
  }
}

export interface HomepageContent {
  hero: HeroProps
  sections: SectionTypes[]
}

export async function getHomepageContent(
  client: SanityClient,
): Promise<HomepageContent> {
  console.log('Executing homepage query')
  const result = await client.fetch(homepageQuery)
  console.log('Query result:', result)
  return result
}
