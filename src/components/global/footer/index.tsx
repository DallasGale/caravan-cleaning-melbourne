import Image from 'next/image'
import Logo from 'public/images/logo.svg'
import Instagram from 'public/images/instagram.svg'
import Facebook from 'public/images/facebook.svg'
import Therford from 'public/images/thetford-white.svg'
import Dometic from 'public/images/dometic-white.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content-grid">
          <Image src={Logo} alt="Logo" width={290} height={90} />
          <div>
            <p className="paragraph color-teal">
              Based in Melbourne’s outer east we are a family owned & operated
              business offering{' '}
              <strong className="color-white">Full Pre-Sale Detail</strong>,{' '}
              <strong className="color-white">Parts & Accessories</strong> and
              specialise in{' '}
              <strong className="color-white">
                Caravan, Motorhome & Camper Trailer
              </strong>{' '}
              cleaning.
            </p>
            <br />
            <p className=" paragraph color-light-blue">Suppliers of...</p>
            <Image src={Dometic} alt="Dometic" width={200} height={50} />
            <Image src={Therford} alt="Therford" width={200} height={50} />
          </div>

          <div className="footer__list-grid">
            {/* Col 1 */}
            <div>
              <h2 className="display-4 uppercase color-white">Services</h2>
              <ul className="footer__list">
                <li className="footer__list paragraph color-light-blue">
                  Caravan Cleaning
                </li>
                <li className="footer__list paragraph color-light-blue">
                  Motorhome Cleaning
                </li>
                <li className="footer__list paragraph color-light-blue">
                  Pre-Sale Detail
                </li>
                <li className="footer__list paragraph color-light-blue">
                  Parts & Accessories
                </li>
              </ul>
              <h2 className="display-4 uppercase color-white">Company</h2>
              <ul className="footer__list">
                <li className="footer__list paragraph color-light-blue">
                  About Us
                </li>
                <li className="footer__list paragraph color-light-blue">
                  Testimonials
                </li>
                <li className="footer__list paragraph color-light-blue">
                  Recent Work
                </li>
              </ul>
            </div>
            {/* Col 2 */}
            <div>
              <h2 className="display-4 uppercase color-white">Contact</h2>
              <div className="footer__list-grid">
                <div>
                  <p className="paragraph color-light-blue">Natalie</p>
                  <p className="paragraph color-white">0408 811 910</p>
                </div>
                <div>
                  <p className="paragraph color-light-blue">Gavin</p>
                  <p className="paragraph color-white">0408 811 910</p>
                </div>
              </div>

              <div className="footer__list-grid">
                <div>
                  <p className="paragraph color-light-blue">Email</p>
                  <p className="paragraph color-white">
                    sales@caravancleaningmelbourne.com.au
                  </p>
                </div>
              </div>

              <div className="footer__list-grid">
                <div>
                  <p className="paragraph color-light-blue">Connect</p>
                  <div
                    style={{ display: 'flex', flexDirection: 'row', gap: 10 }}
                  >
                    <Image
                      src={Facebook}
                      alt="Facebook"
                      width={22}
                      height={22}
                    />
                    <Image
                      src={Instagram}
                      alt="Instagram"
                      width={22}
                      height={22}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__seo">
          <p className="small-print">
            Caravan Cleaning & Polishing - Motorhome Cleaning & Polishing -
            Camper Trailer Cleaning & Polishing - Caravan Pre-Sale Detail -
            Motorhome Pre-Sale Detail - Camper Trailer Pre-Sale Detail - Caravan
            Parts & Accessories - Motorhome Parts & Accessories - Camper Trailer
            Parts & Accessories - Caravan Awning Stain Removal - Motorhome
            Awning Stain Removal- Camper Trailer Awning Stain Removal - Caravan
            Cleaning Products - Motorhome Cleaning Products - Camper Trailer
            Cleaning Products - Caravan Weather Protection - Motorhome Weather
            Protection - Camper Trailer Weather Protection
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
