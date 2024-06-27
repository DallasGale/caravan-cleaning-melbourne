import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Container from '~/components/Container'
import GridFeature from '~/components/homepage/gridFeature'
import Hero from '~/components/homepage/hero'
import { HeroProps } from '~/components/homepage/hero/types'
import ServiceFeature from '~/components/homepage/serviceFeature'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  HomepageContent,
  getHomepageContent,
  homepageQuery,
} from '~/lib/sanity.queries'

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const client = getClient(preview ? { token: readToken } : undefined)

  try {
    const homepageContent = await getHomepageContent(client)

    return {
      props: {
        preview,
        token: preview ? readToken : '',
        homepageContent,
      },
    }
  } catch (error) {
    console.error('Error fetching homepage content:', error)
    return { props: { error: 'Failed to fetch data' } }
  }
}
export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
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
