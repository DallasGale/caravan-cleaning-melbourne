import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Container from '~/components/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getHomepageContent, homepageQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  console.log('Fetching homepage content')
  const client = getClient(preview ? { token: readToken } : undefined)

  try {
    const homepageContent = await getHomepageContent(client)
    console.log('Homepage content:', JSON.stringify(homepageContent, null, 2))

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
  const [content] = useLiveQuery<any>(props.homepageContent, homepageQuery)
  const heroContent = content?.[0]?.hero
  const sections = content?.[0]?.sections
  console.log({ heroContent })
  console.log({ sections })

  if (!content) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <section id="hero">
        <h1>{content.hero?.heading}</h1>
        <p>{content.hero?.subHeading}</p>
        <p>{content.hero?.cta}</p>
      </section>
    </Container>
  )
}
