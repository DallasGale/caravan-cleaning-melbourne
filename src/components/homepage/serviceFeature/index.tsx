import ContentWrapper from '~/components/contentWrapper'
import PrimaryCta from '~/components/cta/primary'
import SecondaryCta from '~/components/cta/secondary'
import RichText from '~/components/richText'
import { SectionTypes } from '~/lib/sanity.queries'
import Carousel from '~/components/carousel'
import { useIsMobile } from '~/hooks/useIsMobile'
import handleBackgroundImage from '~/utils/handleBackgroundImage'

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

  return (
    <section
      className={`section ${darkMode ? 'dark' : 'light'}`}
      style={{
        backgroundImage: handleBackgroundImage(
          isMobile,
          backgroundImage,
          mobileBackgroundImage,
        ),
      }}
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
        {/* <MantineCarousel data={mediaCarousel} /> */}
      </ContentWrapper>
    </section>
  )
}
export default ServiceFeature
