import { Select, TextInput, Textarea } from '@mantine/core'
import PrimaryCta from '~/components/cta/primary'
import { useForm, ValidationError } from '@formspree/react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { useState } from 'react'

const key = process.env.NEXT_WEB3EMAIL_ACCESS_KEY
const Contact = () => {
  // const [state, handleSubmit, reset] = useForm(process.env.NEXT_PUBLIC_FORM)

  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', key)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      event.target.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }
  return (
    <section className="contact" id="enquire">
      <div className="contact__container">
        {/* {state.submitting && <p>Submitting…</p>}
        {state.succeeded && (
          <div>
            <p>Thanks!</p>
            <button onClick={reset}>Reset</button>
          </div>
        )}

        {!state.succeeded && ( */}
        <>
          <h1 className="heading-2 color-navy weight-bold">
            Contact us today for a FREE QUOTE.
          </h1>
          <p className="body-1 weight-semi">
            Contact us now for a complimentary, no-obligation quote tailored to
            your specific caravan and motorhome cleaning needs.
          </p>
          <form onSubmit={onSubmit}>
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />

            <TextInput
              required
              name="firstNAME"
              id="firstNAME"
              placeholder="First Name"
              classNames={{ input: 'form__fields' }}
            />
            <TextInput
              required
              name="lastNAME"
              id="lastNAME"
              placeholder="Last Name"
              classNames={{ input: 'form__fields' }}
            />
            {/* <ValidationError
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
              /> */}
            <button type="submit">Submit</button>
          </form>
        </>
        {/* )} */}
      </div>
    </section>
  )
}

export default Contact
