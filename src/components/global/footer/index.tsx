import Image from 'next/image'
import Logo from 'public/images/logo.svg'
import Instagram from 'public/images/instagram.svg'
import Facebook from 'public/images/facebook.svg'
import Therford from 'public/images/thetford-white.svg'
import Dometic from 'public/images/dometic-white.svg'
import { FooterContent } from '~/lib/sanity.queries'
import RichText from '~/components/richText'
import Link from 'next/link'
import { ActionIcon } from '@mantine/core'
import { useRouter } from 'next/navigation'

const Footer = ({
  infoText,
  showLogos,
  company,
  services,
  contact,
  seoKeywords,
}: FooterContent) => {
  const router = useRouter()
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content-grid">
          <Image
            src={Logo}
            alt="Logo"
            width={290}
            height={90}
            className="footer__logo"
          />
          <div>
            {/* <p className="paragraph color-teal"> */}
            <RichText content={infoText} className="paragraph footer-info" />

            {/* </p> */}
            <br />
            {showLogos && (
              <>
                <p className="paragraph color-light-blue">Suppliers of...</p>
                <div className="footer__logo-grid">
                  <Image src={Dometic} alt="Dometic" width={200} height={50} />
                  <Image
                    src={Therford}
                    alt="Therford"
                    width={200}
                    height={50}
                  />
                </div>
              </>
            )}
          </div>

          <div className="footer__list-grid">
            {/* Col 1 */}
            <div>
              <h2 className="display-4 uppercase color-white">Services</h2>
              <ul className="footer__list">
                {services.map((service) => (
                  <li className="footer__list paragraph color-light-blue">
                    <Link href={service.link} className="footer-link">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h2 className="display-4 uppercase color-white">Company</h2>
              <ul className="footer__list">
                {company.map((service) => (
                  <li className="footer__list paragraph color-light-blue">
                    <Link href={service.link} className="footer-link">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Col 2 */}
            <div>
              <h2 className="display-4 uppercase color-white">Contact</h2>
              <ul className="footer__list">
                <li className="footer__list">
                  <div className="footer__list-grid">
                    {contact.phoneNumbers.map(({ name, number, _key }) => (
                      <div key={_key}>
                        <p className="paragraph color-light-blue">{name}</p>
                        <Link
                          href={`tel:${number}`}
                          className="footer-link color-white"
                        >
                          {number}
                        </Link>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>

              <div className="footer__list-grid">
                <div>
                  <p className="paragraph color-light-blue">Email</p>
                  <Link
                    href={`mailto:${contact.email}`}
                    className="footer-link paragraph color-white"
                  >
                    {contact.email}
                  </Link>
                </div>
              </div>

              <div className="footer__list-grid">
                <div>
                  <p className="paragraph color-light-blue">Connect</p>
                  <ul className="footer__list">
                    <li className="footer__list">
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: 10,
                        }}
                      >
                        <ActionIcon
                          style={{ backgroundColor: 'transparent' }}
                          onClick={() => router.push(`${contact.facebook}`)}
                        >
                          <Image
                            src={Facebook}
                            alt="Facebook"
                            width={22}
                            height={22}
                          />
                        </ActionIcon>
                        <ActionIcon
                          style={{ backgroundColor: 'transparent' }}
                          onClick={() => router.push(`${contact.instagram}`)}
                        >
                          <Image
                            src={Instagram}
                            alt="Instagram"
                            width={22}
                            height={22}
                          />
                        </ActionIcon>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__seo">
          <p className="small-print">{seoKeywords}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
