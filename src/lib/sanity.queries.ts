import groq from 'groq'
import { type SanityClient } from 'next-sanity'
import { CardTypes } from '~/components/card/types'
import { CtaProps } from '~/components/cta/types'
import { HeroProps } from '~/components/homepage/hero/types'
import { RichTextProps } from '~/components/richText/type'
import { richTextRawTypes } from '~/components/types'

export const navigationQuery = groq`*[_type == "navigation"] {
  navItems[] {
    link,
    name,
    dropdownItems[] {
      heading,
      paragraph,
      image {
        asset-> {
          url,
        },
      }, 
      imageAlt,
      link,
      additionalListHeading,
        additionalList[] {
        _key,
        heading,
        link,
      }
    }
  },
  phone,
}`

export type NavItem = {
  link: string
  name: string
  dropdownItems: DropdownItem[]
}

export type AdditionalListTypes = {
  _key: string
  heading: string
  link: string
}

export type DropdownItem = {
  _key: string
  heading: string
  paragraph: string
  image: AssetType
  link: string
  additionalListHeading?: string
  additionalList?: AdditionalListTypes[]
}

export interface NavigationContent {
  navItems: NavItem[]
  phone: string
}

export async function getNavigationContent(
  client: SanityClient,
): Promise<HomepageContent> {
  console.log('Executing navigation query')
  const result = await client.fetch(navigationQuery)
  console.log('Query result:', result)
  return result
}

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
    id,
    darkMode,
    title,
    subTitle,
    details[],
    imageCarousel {
      images[] {
        _key,
        asset-> {
          url
        },
        imageAlt,
      },
      videos[] {
        _key,
        asset-> {
          url
        },
        imageAlt,
      },
    },
    backgroundImage {
      asset->{
        url
      }
    },
    logosHeading,
    logos[] {
      imageAlt,
      image {
        asset-> {
          url
        }
      }
    },
    cards[] {
      _key,
      title,
      link,
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

export const aboutPageQuery = groq`*[_type == "aboutPage"][0]{
  title,
  paragraph,
  imageCarousel {
    images[] {
      _key,
      asset-> {
        url
      },
      imageAlt,
    },
  },
}`

export interface AboutPageContent {
  title: string
  paragraph: richTextRawTypes[]
  imageCarousel: {
    images: AssetType[]
    videos: AssetType[]
  }
}

export type SectionTypes = {
  _key: string
  _type: 'serviceFeature' | 'gridFeature' | 'minimalGridFeature'
  id: string
  darkMode: boolean
  title: string
  imageCarousel?: {
    images: AssetType[]
    videos: AssetType[]
  }
  subTitle: string
  details?: richTextRawTypes[]
  primaryCta: CtaProps
  secondaryCta?: CtaProps
  logosHeading?: string
  logos?: ImageTypes[]
  cards?: CardTypes[]
  backgroundImage?: {
    asset: {
      url: string
    }
  }
}
export type AssetType = {
  _type: 'image' | 'file'
  _key: string
  asset: {
    url: string
  }
  imageAlt: string
}

export type ImageTypes = {
  image: AssetType
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

export async function getAboutPageContent(
  client: SanityClient,
): Promise<AboutPageContent> {
  console.log('Executing about page query')
  const result = await client.fetch(aboutPageQuery)
  console.log('Query result:', result)
  return result
}
