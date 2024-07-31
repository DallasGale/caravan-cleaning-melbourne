import RichText from '~/components/richText'
import { HeroProps } from './types'
import Image from 'next/image'
import ContentWrapper from '~/components/contentWrapper'
import PrimaryCta from '~/components/cta/primary'
import { useIsMobile } from '~/hooks/useIsMobile'

const Hero = ({
  heading,
  subHeading,
  primaryCta,
  backgroundImage,
  mobileBackgroundImage,
}: HeroProps) => {
  const isMobile = useIsMobile()

  const handleBackgroundImage = () => {
    if (backgroundImage) return `url(${backgroundImage.asset.url})`
    else if (isMobile && mobileBackgroundImage)
      return `url(${mobileBackgroundImage.asset.url})`
    else return 'none'
  }
  return (
    <section
      id="homepage-hero"
      className="section homepage-hero"
      style={{ backgroundImage: handleBackgroundImage() }}
    >
      <ContentWrapper>
        <div className="homepage-hero__content">
          <h1 className="heading-1 color-white">{heading}</h1>
          <RichText content={subHeading} className="hero" />
          <div>
            <PrimaryCta {...primaryCta} />
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Hero
