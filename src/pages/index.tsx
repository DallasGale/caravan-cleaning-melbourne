import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { SanityDocument } from 'next-sanity'
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
  getHomepageContent,
  homepageQuery,
} from '~/lib/sanity.queries'

type PageProps = {
  homepageContent: HomepageContent
  draftMode: boolean
  token: string
}

export default function Home(props: PageProps) {
  const [content] = useLiveQuery<HomepageContent>(
    props.homepageContent,
    homepageQuery,
  )
  console.log({ content })
  const hero: HeroProps = content?.hero
  const sections: HomepageContent['sections'] = content?.sections
  console.log({ sections })

  if (!content) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Hero {...hero} />
      {sections.map((section) => {
        console.log({ section })
        switch (section._type) {
          case 'serviceFeature':
            return <ServiceFeature key={section._key} {...section} />
          case 'gridFeature':
            return <GridFeature key={section._key} {...section} />
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

    return {
      props: {
        draftMode,
        token: draftMode ? readToken : '',
        homepageContent,
      },
    }
  } catch (error) {
    console.error('Error fetching homepage content:', error)
    return { props: { error: 'Failed to fetch data' } }
  }
}
