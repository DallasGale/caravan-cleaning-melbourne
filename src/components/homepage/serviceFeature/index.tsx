import Image from 'next/image'
import ContentWrapper from '~/components/contentWrapper'
import PrimaryCta from '~/components/cta/primary'
import SecondaryCta from '~/components/cta/secondary'
import RichText from '~/components/richText'
import { SectionTypes } from '~/lib/sanity.queries'
import Placeholder from '/public/images/carousel-placeholder.jpg'
import Carousel from '~/components/carousel'
import VerticalCarousel from '~/components/carousel/vertical'

interface ServiceFeatureProps
  extends Omit<SectionTypes, 'logosHeading' | 'logo' | 'cards'> {}

const ServiceFeature = ({
  title,
  subTitle,
  details,
  backgroundImage,
  primaryCta,
  secondaryCta,
  darkMode,
  imageCarousel,
}: ServiceFeatureProps) => {
  console.log({ darkMode })
  return (
    <section className={`section ${darkMode ? 'dark' : 'light'}`}>
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

        {imageCarousel && (
          <div className="carousel">
            <Carousel assets={imageCarousel} />
          </div>
        )}
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
export default ServiceFeature
