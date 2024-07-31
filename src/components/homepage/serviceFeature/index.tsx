import Image from 'next/image'
import ContentWrapper from '~/components/contentWrapper'
import PrimaryCta from '~/components/cta/primary'
import SecondaryCta from '~/components/cta/secondary'
import RichText from '~/components/richText'
import { SectionTypes } from '~/lib/sanity.queries'
import Placeholder from '/public/images/carousel-placeholder.jpg'
import Carousel from '~/components/carousel'
import VerticalCarousel from '~/components/carousel/vertical'
import { useIsMobile } from '~/hooks/useIsMobile'

interface ServiceFeatureProps
  extends Omit<SectionTypes, 'logosHeading' | 'logo' | 'cards'> {}

const ServiceFeature = ({
  title,
  subTitle,
  details,
  backgroundImage,
  mobileBackgroundImage,
  primaryCta,
  secondaryCta,
  darkMode,
  mediaCarousel,
}: ServiceFeatureProps) => {
  const isMobile = useIsMobile()

  const handleBackgroundImage = () => {
    if (backgroundImage) return `url(${backgroundImage.asset.url})`
    else if (isMobile && mobileBackgroundImage)
      return `url(${mobileBackgroundImage.asset.url})`
    else return 'none'
  }
  return (
    <section
      className={`section ${darkMode ? 'dark' : 'light'}`}
      style={{ backgroundImage: handleBackgroundImage() }}
    >
      <ContentWrapper modifier="with-carousel">
        <div className="section__words-wrapper">
          <div className="section__intro-hero">
            <h1
              className={`heading-1 ${darkMode ? 'color-white' : 'color-navy'}`}
            >
              {title}
            </h1>
          </div>
          <div className="section__intro">
            <div className="section__intro-words">
              <h2
                className={`display-2 ${darkMode ? 'color-white' : 'color-navy'}`}
              >
                {subTitle}
              </h2>
              <RichText
                color={darkMode ? 'color-white' : 'color-navy'}
                content={details}
              />
            </div>
          </div>

          <div className="cta__lockup">
            {secondaryCta && <SecondaryCta {...secondaryCta} />}
            {primaryCta && <PrimaryCta {...primaryCta} />}
          </div>
        </div>

        {mediaCarousel && (
          <div className="carousel">
            <Carousel assets={mediaCarousel} />
          </div>
        )}
      </ContentWrapper>
    </section>
  )
}
export default ServiceFeature
