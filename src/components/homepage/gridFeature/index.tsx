import Image from 'next/image'
import Link from 'next/link'
import Card from '~/components/card'
import ContentWrapper from '~/components/contentWrapper'
import PrimaryCta from '~/components/cta/primary'
import RichText from '~/components/richText'
import { SectionTypes } from '~/lib/sanity.queries'

interface GridFeatureProps extends SectionTypes {}

const GridFeature = ({
  title,
  subTitle,
  cards,
  backgroundImage,
  primaryCta,
  secondaryCta,
}: GridFeatureProps) => {
  return (
    <section className="section">
      <ContentWrapper>
        <div className="section__intro">
          <h1 className="heading-1">{title}</h1>
          <RichText content={subTitle} className="heading-3" />
        </div>
        {/* Cards */}
        <ul className="card-grid">
          {cards.map((card) => {
            return (
              <li key={card._key} className="card-grid__item">
                <Link href="/">
                  <Card {...card} />
                </Link>
              </li>
            )
          })}
        </ul>
        <PrimaryCta {...primaryCta} />
        {secondaryCta && 'todo'}
      </ContentWrapper>
      {backgroundImage && (
        <Image
          className="section__background"
          src={backgroundImage.asset.url}
          alt={''}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      )}
    </section>
  )
}
export default GridFeature
