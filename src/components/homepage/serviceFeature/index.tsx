import Image from 'next/image'
import ContentWrapper from '~/components/contentWrapper'
import RichText from '~/components/richText'
import { SectionTypes } from '~/lib/sanity.queries'

interface ServiceFeatureProps extends SectionTypes {}

const ServiceFeature = ({
  title,
  subTitle,
  details,
  backgroundImage,
  darkMode,
}: ServiceFeatureProps) => {
  return (
    <section className={`section ${darkMode ? 'dark' : 'light'}`}>
      <ContentWrapper>
        <div className="section__intro">
          <div className="section__intro-words">
            <h1
              className={`heading-1 ${darkMode ? 'color-white' : 'color-navy'}`}
            >
              {title}
            </h1>
            <h2
              className={`display-3 ${darkMode ? 'color-white' : 'color-navy'}`}
            >
              {subTitle}
            </h2>
            <RichText
              color={darkMode ? 'color-white' : 'color-navy'}
              content={details}
              // className={`body-1 ${darkMode ? 'color-white' : 'color-navy'}`}
            />
          </div>
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
