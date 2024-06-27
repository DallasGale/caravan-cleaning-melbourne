import Image from 'next/image'
import ContentWrapper from '~/components/contentWrapper'
import { SectionTypes } from '~/lib/sanity.queries'

interface ServiceFeatureProps extends SectionTypes {}

const ServiceFeature = ({ title, backgroundImage }: ServiceFeatureProps) => {
  return (
    <section className="section">
      <ContentWrapper>
        <h1>{title}</h1>
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
export default ServiceFeature
