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
  const [liveHomepageContent] = useLiveQuery<HomepageContent>(
    homepageContent,
    homepageQuery,
    { enabled: draftMode },
  )

  const content = draftMode ? liveHomepageContent : homepageContent

  const hero: HeroProps = content?.hero
  const sections: HomepageContent['sections'] = content?.sections || []

  console.log({ hero })
  return (
    <Container
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
