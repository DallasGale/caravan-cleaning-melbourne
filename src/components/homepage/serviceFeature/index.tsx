import Image from 'next/image'
import ContentWrapper from '~/components/contentWrapper'
import PrimaryCta from '~/components/cta/primary'
import SecondaryCta from '~/components/cta/secondary'
import RichText from '~/components/richText'
import { SectionTypes } from '~/lib/sanity.queries'
import Placeholder from '/public/images/carousel-placeholder.jpg'

import { Carousel } from 'antd'

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
}: ServiceFeatureProps) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }

  return (
    <section className={`section ${darkMode ? 'dark' : 'light'}`}>
      <ContentWrapper withCarousel>
        <div>
          <div className="section__intro-hero">
            <h1
              className={`heading-2 ${darkMode ? 'color-white' : 'color-navy'}`}
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

        <div className="carousel">
          {/* <div style={{ height: 300 }}>
            <Carousel afterChange={onChange} centerMode adaptiveHeight>
              <Image layout="responsive" src={Placeholder} alt="placeholder" />

              <Image layout="responsive" src={Placeholder} alt="placeholder" />

              <Image layout="responsive" src={Placeholder} alt="placeholder" />
              <Image layout="responsive" src={Placeholder} alt="placeholder" />
            </Carousel>
          </div> */}
        </div>
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
