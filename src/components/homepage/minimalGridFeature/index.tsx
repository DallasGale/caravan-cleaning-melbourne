import Image from 'next/image'
import Link from 'next/link'
import Card from '~/components/card'
import ContentWrapper from '~/components/contentWrapper'
import PrimaryCta from '~/components/cta/primary'
import RichText from '~/components/richText'
import { SectionTypes } from '~/lib/sanity.queries'
import { motion } from 'framer-motion'
import SmallCard from '~/components/smallCard'

interface MinimalGridFeatureProps
  extends Omit<
    SectionTypes,
    'logosHeading' | 'logo' | 'secondaryCta' | 'backgroundImage' | 'details'
  > {}

const MinimalGridFeature = ({
  id,
  title,
  subTitle,
  cards,
  primaryCta,
}: MinimalGridFeatureProps) => {
  return (
    <section
      className="section section__minimal-grid-feature"
      id={id}
      suppressHydrationWarning={true}
    >
      <ContentWrapper modifier="content-wrapper__minimal">
        <div className="section__minimal-grid-feature-content">
          <div className="section__minimal-grid-feature-cta">
            <h1 className="heading-3">{title}</h1>
            {subTitle && <h2 className="display-3">{subTitle}</h2>}
            <div>
              <PrimaryCta {...primaryCta} />
            </div>
          </div>

          <motion.ul
            className="card-grid card-grid--three"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            {cards.map((card, index) => {
              return (
                <li key={card._key} className="card-grid__item">
                  <Link href={card.link} legacyBehavior>
                    <SmallCard {...card} delay={index * 0.25} />
                  </Link>
                </li>
              )
            })}
          </motion.ul>
        </div>
      </ContentWrapper>
    </section>
  )
}
export default MinimalGridFeature
