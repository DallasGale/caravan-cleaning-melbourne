import { Select, TextInput, Textarea } from '@mantine/core'
import PrimaryCta from '~/components/cta/primary'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit, reset] = useForm(process.env.NEXT_PUBLIC_FORM)

  return (
    <section className="contact" id="enquire">
      <div className="contact__container">
        {state.submitting && <p>Submitting…</p>}
        {state.succeeded && (
          <div>
            <p>Thanks!</p>
            <button onClick={reset}>Reset</button>
          </div>
        )}

        {!state.succeeded && (
          <>
            <h1 className="heading-2 color-navy weight-bold">
              Contact us today for a FREE QUOTE.
            </h1>
            <p className="body-1 weight-semi">
              Contact us now for a complimentary, no-obligation quote tailored
              to your specific caravan and motorhome cleaning needs.
            </p>
            <form
              onSubmit={handleSubmit}
              className="contact__form"
              method="POST"
            >
              <TextInput
                name="name"
                id="name"
                placeholder="First Name"
                classNames={{ input: 'form__fields' }}
              />

              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <TextInput
                name="email"
                id="email"
                placeholder="Email"
                classNames={{ input: 'form__fields' }}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <TextInput
                name="phone"
                id="phone"
                placeholder="Phone"
                classNames={{ input: 'form__fields' }}
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
              <Select
                name="service"
                placeholder="Choose Service"
                classNames={{ input: 'form__fields' }}
                data={[
                  { label: 'Interior Cleaning', value: 'interior-cleaning' },
                  { label: 'Exterior Cleaning', value: 'exterior-cleaning' },
                  { label: 'Full Cleaning', value: 'full-cleaning' },
                ]}
              />

              <Textarea
                name="message"
                placeholder="Leave a message"
                rows={8}
                classNames={{ input: 'form__fields' }}
              />

              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}

export default Contact
