import { Select, TextInput, Textarea } from '@mantine/core'
import PrimaryCta from '~/components/cta/primary'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit, reset] = useForm('mpwawynp')

  if (state.submitting) {
    return <p>Submitting…</p>
  }

  if (state.succeeded) {
    return (
      <div>
        <p>Thanks!</p>;<button onClick={reset}>Reset</button>
      </div>
    )
  }

  return (
    <section className="contact" id="enquire">
      <div className="contact__container">
        <h1 className="heading-2 color-navy weight-bold">
          Contact us today for a FREE QUOTE.
        </h1>
        <p className="body-1 weight-semi">
          Contact us now for a complimentary, no-obligation quote tailored to
          your specific caravan and motorhome cleaning needs.
        </p>
        <form onSubmit={handleSubmit} className="contact__form">
          <TextInput
            id="name"
            placeholder="First Name"
            classNames={{ input: 'form__fields' }}
          />

          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <TextInput
            id="email"
            placeholder="Email"
            classNames={{ input: 'form__fields' }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <TextInput
            id="phone"
            placeholder="Phone"
            classNames={{ input: 'form__fields' }}
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
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

          <PrimaryCta
            link="/#enquire"
            label="Submit Enquiry"
            type="submit"
            disabled={state.submitting}
          />
        </form>
      </div>
    </section>
  )
}

export default Contact
