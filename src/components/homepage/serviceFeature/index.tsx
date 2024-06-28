import Image from 'next/image'
import ContentWrapper from '~/components/contentWrapper'
import RichText from '~/components/richText'
import { SectionTypes } from '~/lib/sanity.queries'

interface ServiceFeatureProps extends SectionTypes {}

const ServiceFeature = ({
  title,
  subTitle,
  backgroundImage,
  darkMode,
}: ServiceFeatureProps) => {
  return (
    <section className={`section ${darkMode ? 'dark' : 'light'}`}>
      <ContentWrapper>
        <div className="section__intro">
          <h1
            className={`heading-1 ${darkMode ? 'color-white' : 'color-black'}`}
          >
            {title}
          </h1>
          {/* <RichText content={subTitle} className="heading-3" /> */}
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
