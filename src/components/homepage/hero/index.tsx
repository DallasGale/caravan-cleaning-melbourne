import RichText from '~/components/richText'
import { HeroProps } from './types'
import Image from 'next/image'
import ContentWrapper from '~/components/contentWrapper'
import PrimaryCta from '~/components/cta/primary'

const Hero = ({
  heading,
  subHeading,
  primaryCta,
  backgroundImage,
}: HeroProps) => {
  return (
    <section id="homepage-hero" className="section homepage-hero">
      <ContentWrapper>
        <div className="homepage-hero__content">
          <h1 className="heading-1 color-white">{heading}</h1>
          <RichText content={subHeading} className="heading-3 hero" />
          <div>
            <PrimaryCta {...primaryCta} />
          </div>
        </div>
      </ContentWrapper>
      <Image
        className="section__background"
        src={backgroundImage.asset.url}
        alt={''}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </section>
  )
}

export default Hero
