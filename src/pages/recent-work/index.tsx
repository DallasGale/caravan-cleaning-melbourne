import type { GetStaticProps } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Slider from 'react-slick'

import Container from '~/components/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { token } from '~/lib/sanity.token'
import {
  AboutPageContent,
  NavigationContent,
  RecentWorkPageContent,
  aboutPageQuery,
  getAboutPageContent,
  getRecentWorkContent,
  navigationQuery,
} from '~/lib/sanity.queries'
import ContentWrapper from '~/components/contentWrapper'
import RichText from '~/components/richText'
import Image from 'next/image'
import Carousel from '~/components/carousel'
import ComparisonCarousel from '~/components/carousel/comparison'

type PageProps = {
  navigationContent: NavigationContent
  recentWorkPageContent: RecentWorkPageContent
  draftMode: boolean
  token: string
}

export default function RecentWork({
  navigationContent,
  recentWorkPageContent,
  draftMode,
  token,
}: PageProps) {
  const [liveRecentWorkPageContent] = useLiveQuery<RecentWorkPageContent>(
    recentWorkPageContent,
    aboutPageQuery,
    { enabled: draftMode },
  )
  const content = draftMode ? liveRecentWorkPageContent : recentWorkPageContent
  console.log({ content })
  return (
    <Container
      navigationContent={navigationContent}
      draftMode={draftMode}
      token={token}
    >
      <section className="section section__recent-work  dark" id="recent-work">
        <ContentWrapper modifier="recent-work__content-wrapper">
          <div className="recent-work__intro">
            <h1 className="heading-2 color-white">{content.title}</h1>
            <RichText
              content={content.paragraph}
              className="recent-work__paragraph display-1 color-teal"
            />
          </div>
          {content.comparisonCarousel.map((carousel, index) => (
            <ComparisonCarousel
              category={carousel.category}
              slidePairs={carousel.slidePairs}
            />
          ))}
        </ContentWrapper>
      </section>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? token : undefined)

  try {
    const recentWorkPageContent = await getRecentWorkContent(client)
    const navigationContent = await client.fetch(navigationQuery)

    return {
      props: {
        draftMode,
        token: draftMode ? readToken : '',
        recentWorkPageContent,
        navigationContent,
      },
    }
  } catch (error) {
    console.error('Error fetching recenet page content:', error)
    return { props: { error: 'Failed to fetch data' } }
  }
}
