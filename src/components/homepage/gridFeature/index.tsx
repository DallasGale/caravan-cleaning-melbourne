import Image from 'next/image'
import Link from 'next/link'
import Card from '~/components/card'
import ContentWrapper from '~/components/contentWrapper'
import PrimaryCta from '~/components/cta/primary'
import RichText from '~/components/richText'
import { SectionTypes } from '~/lib/sanity.queries'
import { motion } from 'framer-motion'
import handleBackgroundImage from '~/utils/handleBackgroundImage'
import { useIsTablet } from '~/hooks/useIsTablet'

interface GridFeatureProps extends SectionTypes {}

const GridFeature = ({
  id,
  title,
  subTitle,
  details,
  cards,
  logosHeading,
  logos,
  backgroundImage,
  primaryCta,
  secondaryCta,
}: GridFeatureProps) => {
  const isTablet = useIsTablet()

  return (
    <section
      className="section"
      id={id}
      style={{
        backgroundImage: handleBackgroundImage(isTablet, backgroundImage, null),
      }}
    >
      <ContentWrapper>
        <div className="section__intro-hero">
          <h1 className="heading-1">{title}</h1>
        </div>
        <div className="section__intro">
          <div className="section__intro-words">
            {subTitle && <h2 className="display-2 weight-bold">{subTitle}</h2>}
            <RichText content={details} />
          </div>

          {/* Logos */}

          {logos && (
            <div className="section__logos">
              <ul className="section__logo-grid">
                <li className="section__logo-grid-item">
                  {logosHeading && <p className="paragraph">{logosHeading}</p>}
                </li>
                {logos.map((logo) => {
                  return (
                    <li
                      key={logo.image._key}
                      className="section__logo-grid-item"
                    >
                      <Image
                        src={logo.image.asset.url}
                        alt={logo.image.imageAlt}
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
          <motion.ul
            className="card-grid"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            {cards.map((card, index) => {
              return (
                <li key={card._key} className="card-grid__item">
                  <Card {...card} delay={index * 0.05} />
                </li>
              )
            })}
          </motion.ul>
        )}
        <PrimaryCta {...primaryCta} />
        {secondaryCta && 'todo'}
      </ContentWrapper>
    </section>
  )
}
export default GridFeature
