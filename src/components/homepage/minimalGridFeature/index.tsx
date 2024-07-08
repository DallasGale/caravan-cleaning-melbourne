import Image from 'next/image'
import Link from 'next/link'
import Card from '~/components/card'
import ContentWrapper from '~/components/contentWrapper'
import PrimaryCta from '~/components/cta/primary'
import RichText from '~/components/richText'
import { SectionTypes } from '~/lib/sanity.queries'
import { motion } from 'framer-motion'

interface MinimalGridFeatureProps
  extends Omit<
    SectionTypes,
    'logosHeading' | 'logo' | 'secondaryCta' | 'backgroundImage'
  > {}

const MinimalGridFeature = ({
  id,
  title,
  subTitle,
  details,
  cards,
  primaryCta,
}: MinimalGridFeatureProps) => {
  return (
    <section className="section" id={id}>
      <ContentWrapper>
        <div className="section__intro">
          <div className="section__intro-words">
            <h1 className="heading-2">{title}</h1>
            {subTitle && <h2 className="display-3">{subTitle}</h2>}
            <RichText content={details} />
          </div>
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
                  <Link href={card.link} legacyBehavior>
                    <Card {...card} delay={index * 0.25} />
                  </Link>
                </li>
              )
            })}
          </motion.ul>
        )}
        <PrimaryCta {...primaryCta} />
      </ContentWrapper>
    </section>
  )
}
export default MinimalGridFeature
