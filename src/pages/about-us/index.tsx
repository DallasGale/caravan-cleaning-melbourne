import type { GetStaticProps } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Slider from 'react-slick'

import Container from '~/components/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { token } from '~/lib/sanity.token'
import {
  AboutPageContent,
  ContactFormContent,
  FooterContent,
  NavigationContent,
  aboutPageQuery,
  contactFormQuery,
  footerQuery,
  getAboutPageContent,
  navigationQuery,
} from '~/lib/sanity.queries'
import ContentWrapper from '~/components/contentWrapper'
import RichText from '~/components/richText'
import Image from 'next/image'
import Carousel from '~/components/carousel'
import CanonicalTag from '~/components/canonicalTag'

type PageProps = {
  navigationContent: NavigationContent
  footerContent: FooterContent
  contactFormContent: ContactFormContent
  aboutPageContent: AboutPageContent
  draftMode: boolean
  token: string
}

export default function About({
  navigationContent,
  footerContent,
  aboutPageContent,
  contactFormContent,
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
    <>
      <CanonicalTag path="/about-us" />
      <Container
        contactFormContent={contactFormContent}
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
          </ContentWrapper>
        </section>
      </Container>{' '}
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? token : undefined)

  try {
    const aboutPageContent = await getAboutPageContent(client)
    const navigationContent = await client.fetch(navigationQuery)
    const footerContent = await client.fetch(footerQuery)
    const contactFormContent = await client.fetch(contactFormQuery)

    return {
      props: {
        draftMode,
        token: draftMode ? readToken : '',
        aboutPageContent,
        navigationContent,
        contactFormContent,
        footerContent,
      },
    }
  } catch (error) {
    console.error('Error fetching about page content:', error)
    return { props: { error: 'Failed to fetch data' } }
  }
}
