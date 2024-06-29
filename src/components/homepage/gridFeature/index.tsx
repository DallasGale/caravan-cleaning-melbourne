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
  logosHeading,
  logos,
  backgroundImage,
  primaryCta,
  secondaryCta,
}: GridFeatureProps) => {
  console.log({ logosHeading })
  return (
    <section className="section">
      <ContentWrapper>
        <div className="section__intro">
          <div>
            <h1 className="heading-1">{title}</h1>
            <RichText content={subTitle} className="heading-3" />
          </div>

          {/* Logos */}

          {logos && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <ul className="section__logo-grid">
                <li className="section__logo-grid-item">
                  {logosHeading && <p className="paragraph">{logosHeading}</p>}
                </li>
                {logos.map((logo) => {
                  return (
                    <li key={logo.imageAlt} className="section__logo-grid-item">
                      <Image
                        src={logo.image.asset.url}
                        alt={logo.imageAlt}
                        width={200}
                        height={60}
                      />
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>

        {/* Cards */}
        {cards && (
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
        )}
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
