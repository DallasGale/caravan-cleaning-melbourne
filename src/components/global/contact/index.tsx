import { Select, TextInput, Textarea } from '@mantine/core'
import PrimaryCta from '~/components/cta/primary'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { useState } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { ContactFormContent } from '~/lib/sanity.queries'
import RichText from '~/components/richText'

const key = '64212f20-f84f-4265-806d-3bfd83e98a1a'
type SubmitTypes = {
  state: StateTypes
  message: string
}

type StateTypes = 'initial' | 'submitting' | 'succeeded' | 'error'

const Contact = ({ title, paragraph }: ContactFormContent) => {
  const { register, handleSubmit, setValue } = useForm()
  const [isHuman, setIsHuman] = useState(false)
  const [status, setStatus] = useState<SubmitTypes>({
    state: 'initial',
    message: '',
  })
  const onHCaptchaChange = (token) => {
    setValue('h-captcha-response', token)
    console.log({ token })

    if (token) {
      setIsHuman(true)
    }
  }

  const onSubmit = async (event) => {
    console.log({ key })
    event.preventDefault()
    setStatus({ state: 'submitting', message: '' })
    const formData = new FormData(event.target)

    formData.append('access_key', key)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setStatus({ state: 'succeeded', message: data.success })
      event.target.reset()
    } else {
      console.log('Error', data)
      setStatus({ state: 'error', message: data.message })
    }
  }
  return (
    <section className="section contact" id="enquire">
      <div className="contact__container">
        {status.state === 'submitting' && (
          <p className="heading-3 color-navy weight-bold">Submitting…</p>
        )}
        {status.state === 'succeeded' && (
          <h1 className="heading-3 color-navy weight-bold">
            Thanks for your enqury.
            <br />
            We will be in touch soon.
          </h1>
        )}

        {status.state === 'initial' && (
          <>
            <h2 className="heading-2 color-navy weight-bold">{title}</h2>
            <p className="body-1 weight-semi">{paragraph}</p>
            <form onSubmit={onSubmit} className="contact__form">
              <input type="hidden" name="subject" value="New Website Enquiry" />
              <input
                type="hidden"
                name="from_name"
                value="Caravan Cleaning Melbourne Website Enquiry"
              />
              <input
                type="hidden"
                name="replyto"
                value="info@caravancleaningmelbourne.com.au"
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

              <TextInput
                name="email"
                id="email"
                required
                placeholder="Email"
                classNames={{ input: 'form__fields' }}
              />

              <TextInput
                name="phone"
                id="phone"
                required
                placeholder="Phone"
                classNames={{ input: 'form__fields' }}
              />

              {/* <Select
                name="service"
                placeholder="Choose Service"
                classNames={{ input: 'form__fields' }}
                data={[
                  { label: 'Interior Cleaning', value: 'interior-cleaning' },
                  { label: 'Exterior Cleaning', value: 'exterior-cleaning' },
                  { label: 'Full Cleaning', value: 'full-cleaning' },
                ]}
              /> */}

              <Textarea
                required
                name="message"
                placeholder="Leave a message"
                rows={8}
                classNames={{ input: 'form__fields' }}
              />
              <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                onVerify={onHCaptchaChange}
              />
              <PrimaryCta
                type="submit"
                label="Submit Enquiry"
                disabled={!isHuman}
              />
            </form>
          </>
        )}
      </div>
    </section>
  )
}

export default Contact
