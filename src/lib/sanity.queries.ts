import groq from 'groq'
import { type SanityClient } from 'next-sanity'
import { CardTypes } from '~/components/card/types'
import { CtaProps } from '~/components/cta/types'
import { HeroProps } from '~/components/homepage/hero/types'
import { richTextRawTypes } from '~/components/types'

export const footerQuery = groq`*[_type == "footer"][0] {
  services[] {
    label,
    link,
  },
  infoText[],
  company[],
  seoKeywords,
  showLogos,
  contact {
    email,
    instagram,
    facebook,
    phoneNumbers[] {
      number,
      name,
    },
  },
}`

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
    },
    mobileBackgroundImage {
      asset->{
        url
      }
    },
  },
  sections[] {
    _type,
    _key,
    id,
    darkMode,
    title,
    subTitle,
    details[],
    testimonials[] {
      _key,
      writtenBy,
      quote
    },
    mediaCarousel {
      slideOptions[] {
        image {
          _key,
          asset-> {
            url
          },
          imageAlt,
        },
        youTubeId
      },
    },
    backgroundImage {
      asset->{
        url
      }
    },
    mobileBackgroundImage {
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
export const recentWorkPageQuery = groq`*[_type == "recentWorkPage"][0]{
  title,
  paragraph,
  comparisonCarousel[] {
    _key,
    category,
    slidePairs[] {
      _key,
      caption,
      beforeItem {
        image {
          asset-> {
            _type,
            url,
          },
        },
        youTubeId,
      }, 
      afterItem {
        image {
          asset-> {
            _type,
            url,
          },
        },
        youTubeId,
      }
    }
  }
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

export interface AboutPageContent {
  title: string
  paragraph: richTextRawTypes[]
  imageCarousel: {
    images: AssetType[]
    youTubeId: string[]
  }
}
export interface RecentWorkPageContent {
  title: string
  paragraph: richTextRawTypes[]
  comparisonCarousel: ComparisonCarouselTypes[]
}

export type ComparisonCarouselTypes = {
  _key: string
  category: string
  slidePairs: SlidePairTypes[]
}
export type SlidePairTypes = {
  _key: string
  caption: string
  beforeItem: {
    image?: AssetType | null
    youTubeId?: string | null
  }
  afterItem: {
    image?: AssetType | null
    youTubeId?: string | null
  }
}

export type SlideOptionTypes = {
  _key: string
  image: AssetType | null
  youTubeId: string | null
}

export type TestimonialTypes = {
  _key: string
  quote: string
  writtenBy: string
}

export type LinkType = {
  label: string
  link: string
}

export type PhoneNumberType = {
  _key: string
  name: string
  number: string
}
export type FooterContent = {
  services: LinkType[]
  company: LinkType[]
  infoText: richTextRawTypes[]
  showLogos: boolean
  seoKeywords: string
  contact: {
    email: string
    instagram: string
    facebook: string
    phoneNumbers: PhoneNumberType[]
  }
}

export type SectionTypes = {
  _key: string
  _type:
    | 'serviceFeature'
    | 'gridFeature'
    | 'minimalGridFeature'
    | 'testimonialFeature'
  id: string
  darkMode: boolean
  title: string
  mediaCarousel?: {
    slideOptions: SlideOptionTypes[]
  }
  subTitle: string
  details?: richTextRawTypes[]
  primaryCta: CtaProps
  secondaryCta?: CtaProps
  logosHeading?: string
  logos?: ImageTypes[]
  cards?: CardTypes[]
  testimonials: TestimonialTypes[]
  backgroundImage?: {
    asset: {
      url: string
    }
  }
  mobileBackgroundImage?: {
    asset: {
      url: string
    }
  }
}
export type AssetType = {
  _type: 'image' | 'youTubeId'
  _key: string
  posterImage?: string
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
export async function getNavigationContent(
  client: SanityClient,
): Promise<HomepageContent> {
  console.log('Executing navigation query')
  const result = await client.fetch(navigationQuery)
  console.log('Query result:', result)
  return result
}

export async function getHomepageContent(
  client: SanityClient,
): Promise<HomepageContent> {
  console.log('Executing homepage query')
  const result = await client.fetch(homepageQuery)
  console.log('Query result:', result)
  return result
}

export async function getFooterContent(
  client: SanityClient,
): Promise<FooterContent> {
  console.log('Executing footer query')
  const result = await client.fetch(footerQuery)
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

export async function getRecentWorkContent(
  client: SanityClient,
): Promise<RecentWorkPageContent> {
  console.log('Executing recent work page query')
  const result = await client.fetch(recentWorkPageQuery)
  console.log('Query result:', result)
  return result
}
