import RichText from '~/components/richText'
import { HeroProps } from './types'
import ContentWrapper from '~/components/contentWrapper'
import PrimaryCta from '~/components/cta/primary'
import { useIsMobile } from '~/hooks/useIsMobile'
import handleBackgroundImage from '~/utils/handleBackgroundImage'

const Hero = ({
  heading,
  subHeading,
  primaryCta,
  backgroundImage,
  mobileBackgroundImage,
}: HeroProps) => {
  const isMobile = useIsMobile()

  return (
    <section
      id="homepage-hero"
      className="section homepage-hero"
      style={{
        backgroundImage: handleBackgroundImage(
          isMobile,
          backgroundImage,
          mobileBackgroundImage,
        ),
      }}
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
