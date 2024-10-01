import type { GetStaticProps, Metadata } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Head from 'next/head'

import Container from '~/components/Container'
import GridFeature from '~/components/homepage/gridFeature'
import Hero from '~/components/homepage/hero'
import { HeroProps } from '~/components/homepage/hero/types'
import ServiceFeature from '~/components/homepage/serviceFeature'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { token } from '~/lib/sanity.token'
import {
  ContactFormContent,
  FooterContent,
  HomepageContent,
  NavigationContent,
  contactFormQuery,
  footerQuery,
  getHomepageContent,
  homepageQuery,
  navigationQuery,
} from '~/lib/sanity.queries'
import MinimalGridFeature from '~/components/homepage/minimalGridFeature'
import Testimonials from '~/components/global/testimonials'
import CanonicalTag from '~/components/canonicalTag'

type PageProps = {
  navigationContent: NavigationContent
  homepageContent: HomepageContent
  footerContent: FooterContent
  contactFormContent: ContactFormContent
  draftMode: boolean
  token: string
}

// export const metadata: Metadata = {
//   title: 'Caravan Cleaning Melbourne - Free Quotes',
//   description:
//     'Get a free quote from Caravan Cleaning Melbourne for top-notch cleaning of caravans, motor homes, solar panels, and pre-sale detailing.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// }

export default function Home({
  navigationContent,
  homepageContent,
  contactFormContent,
  footerContent,
  draftMode,
  token,
}: PageProps) {
  const [liveHomepageContent] = useLiveQuery<HomepageContent>(
    homepageContent,
    homepageQuery,
    { enabled: draftMode },
  )

  const content = draftMode ? liveHomepageContent : homepageContent
  const hero: HeroProps = content?.hero
  const sections: HomepageContent['sections'] = content?.sections || []

  return (
    <>
      <Head>
        <title>Caravan Cleaning Melbourne - Free Quotes</title>
      </Head>
      <CanonicalTag path="/" />
      <Container
        contactFormContent={contactFormContent}
        footerContent={footerContent}
        navigationContent={navigationContent}
        draftMode={draftMode}
        token={token}
      >
        {hero && <Hero {...hero} />}
        {sections.map((section) => {
          switch (section._type) {
            case 'serviceFeature':
              return <ServiceFeature key={section._key} {...section} />
            case 'gridFeature':
              return <GridFeature key={section._key} {...section} />
            case 'minimalGridFeature':
              return <MinimalGridFeature key={section._key} {...section} />
            case 'testimonialFeature':
              return <Testimonials key={section._key} {...section} />
            default:
              return null
          }
        })}
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? token : undefined)

  try {
    const homepageContent = await getHomepageContent(client)
    const navigationContent = await client.fetch(navigationQuery)
    const footerContent = await client.fetch(footerQuery)
    const contactFormContent = await client.fetch(contactFormQuery)

    return {
      props: {
        draftMode,
        token: draftMode ? readToken : '',
        homepageContent,
        navigationContent,
        footerContent,
        contactFormContent,
      },
    }
  } catch (error) {
    console.error('Error fetching homepage content:', error)
    return { props: { error: 'Failed to fetch data' } }
  }
}
