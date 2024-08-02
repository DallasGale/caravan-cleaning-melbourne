import Image from 'next/image'
import SpeechBubble from '/public/images/speech-bubble.svg'
import { TestimonialTypes } from '~/lib/sanity.queries'

interface TestimonialsProps {
  testimonials: TestimonialTypes[]
}
const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <h1 className="heading-3 color-white testimonials__heading">
          <Image
            src={SpeechBubble}
            alt="Speech Bubble"
            height={60}
            width={60}
          />
          Testimonials
        </h1>
        <div className="testimonials__content-grid">
          {testimonials.map(({ writtenBy, quote, _key }) => (
            <div key={_key}>
              <blockquote className="display-3 weight-bold color-white style-italic text-centre">
                “{quote}”
              </blockquote>
              <p className="paragraph text-centre color-light-blue">
                {writtenBy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
