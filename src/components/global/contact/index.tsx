import { Select, TextInput, Textarea } from '@mantine/core'
import PrimaryCta from '~/components/cta/primary'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <h1 className="heading-2 color-navy weight-bold">
          Contact us today for a FREE QUOTE.
        </h1>
        <p className="body-1 weight-semi">
          Contact us now for a complimentary, no-obligation quote tailored to
          your specific caravan and motorhome cleaning needs.
        </p>
        <div className="contact__form">
          <TextInput
            placeholder="First Name"
            classNames={{ input: 'form__fields' }}
          />
          <TextInput
            placeholder="Email"
            classNames={{ input: 'form__fields' }}
          />
          <TextInput
            placeholder="Phone"
            classNames={{ input: 'form__fields' }}
          />
          <Select
            placeholder="Choose Service"
            classNames={{ input: 'form__fields' }}
            data={[
              { label: 'Interior Cleaning', value: 'interior-cleaning' },
              { label: 'Exterior Cleaning', value: 'exterior-cleaning' },
              { label: 'Full Cleaning', value: 'full-cleaning' },
            ]}
          />

          <Textarea
            placeholder="Leave a message"
            rows={8}
            classNames={{ input: 'form__fields' }}
          />

          <PrimaryCta link="/" label="Submit Enquiry" />
        </div>
      </div>
    </section>
  )
}

export default Contact
