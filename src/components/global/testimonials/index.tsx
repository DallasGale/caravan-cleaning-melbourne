import Image from 'next/image'
import SpeechBubble from '/public/images/speech-bubble.svg'
const Testimonials = () => {
  return (
    <section className="section testimonials" id="testimonials">
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
          <div>
            <blockquote className="display-3 weight-bold color-white style-italic text-centre">
              “Attention to detail was on point - highly recommend.”
            </blockquote>
            <p className="paragraph text-centre color-light-blue">
              Maria Lopez, VP of Design at Meshery
            </p>
          </div>
          <div>
            <blockquote className="display-3 weight-bold color-white style-italic text-centre">
              “Natalie went above and beyond with cleaning our caravan. Highly
              recommend her.”
            </blockquote>
            <p className="body-2 text-centre color-light-blue">
              Maria Lopez, VP of Design at Meshery
            </p>
          </div>
          <div>
            <blockquote className="display-3 weight-bold color-white style-italic text-centre">
              “So impressed with this Company. Natalie cleaned the inside of our
              5 year old van and her thoroughness and attention to detail cannot
              be faulted.""
            </blockquote>
            <p className="body-2 text-centre color-light-blue">
              Maria Lopez, VP of Design at Meshery
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
