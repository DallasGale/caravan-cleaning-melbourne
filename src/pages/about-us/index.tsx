import type { GetStaticProps } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Slider from 'react-slick'

import Container from '~/components/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { token } from '~/lib/sanity.token'
import {
  AboutPageContent,
  FooterContent,
  NavigationContent,
  aboutPageQuery,
  footerQuery,
  getAboutPageContent,
  navigationQuery,
} from '~/lib/sanity.queries'
import ContentWrapper from '~/components/contentWrapper'
import RichText from '~/components/richText'
import Image from 'next/image'
import Carousel from '~/components/carousel'

type PageProps = {
  navigationContent: NavigationContent
  footerContent: FooterContent
  aboutPageContent: AboutPageContent
  draftMode: boolean
  token: string
}

export default function About({
  navigationContent,
  footerContent,
  aboutPageContent,
  draftMode,
  token,
}: PageProps) {
  const [liveAboutPageContent] = useLiveQuery<AboutPageContent>(
    aboutPageContent,
    aboutPageQuery,
    { enabled: draftMode },
  )
  const content = draftMode ? liveAboutPageContent : aboutPageContent

  return (
    <Container
      footerContent={footerContent}
      navigationContent={navigationContent}
      draftMode={draftMode}
      token={token}
    >
      <section className="section section__about-us  dark" id="about-us">
        <ContentWrapper modifier="about-us__content-wrapper">
          <h1 className="heading-2 color-white">{content.title}</h1>
          <RichText
            content={content.paragraph}
            className="about-us__paragraph display-1 color-teal"
          />
          {/* <Carousel
            assets={content.imageCarousel}
            slidesToShow={2}
            // infinite={true}
            slidesToScroll={2}
          /> */}
        </ContentWrapper>
      </section>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? token : undefined)

  try {
    const aboutPageContent = await getAboutPageContent(client)
    const navigationContent = await client.fetch(navigationQuery)
    const footerContent = await client.fetch(footerQuery)

    return {
      props: {
        draftMode,
        token: draftMode ? readToken : '',
        aboutPageContent,
        navigationContent,
        footerContent,
      },
    }
  } catch (error) {
    console.error('Error fetching about page content:', error)
    return { props: { error: 'Failed to fetch data' } }
  }
}
