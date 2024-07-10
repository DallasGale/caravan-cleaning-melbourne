import type { GetStaticProps } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Container from '~/components/Container'
import GridFeature from '~/components/homepage/gridFeature'
import Hero from '~/components/homepage/hero'
import { HeroProps } from '~/components/homepage/hero/types'
import ServiceFeature from '~/components/homepage/serviceFeature'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { token } from '~/lib/sanity.token'
import {
  HomepageContent,
  NavigationContent,
  getHomepageContent,
  homepageQuery,
  navigationQuery,
} from '~/lib/sanity.queries'
import MinimalGridFeature from '~/components/homepage/minimalGridFeature'

type PageProps = {
  navigationContent: NavigationContent
  homepageContent: HomepageContent
  draftMode: boolean
  token: string
}

export default function Home({
  navigationContent,
  homepageContent,
  draftMode,
  token,
}: PageProps) {
  const hero: HeroProps = homepageContent?.hero
  const sections: HomepageContent['sections'] = homepageContent?.sections

  return (
    <Container
      navigationContent={navigationContent}
      draftMode={draftMode}
      token={token}
    >
      <Hero {...hero} />
      {sections.map((section) => {
        console.log({ section })
        switch (section._type) {
          case 'serviceFeature':
            return <ServiceFeature key={section._key} {...section} />
          case 'gridFeature':
            return <GridFeature key={section._key} {...section} />
          case 'minimalGridFeature':
            return <MinimalGridFeature key={section._key} {...section} />
          default:
            return null
        }
      })}
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? token : undefined)

  try {
    const homepageContent = await getHomepageContent(client)
    const navigationContent = await client.fetch(navigationQuery)

    return {
      props: {
        draftMode,
        token: draftMode ? readToken : '',
        homepageContent,
        navigationContent,
      },
    }
  } catch (error) {
    console.error('Error fetching homepage content:', error)
    return { props: { error: 'Failed to fetch data' } }
  }
}
