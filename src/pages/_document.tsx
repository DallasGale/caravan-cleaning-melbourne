import { Head, Html, Main, NextScript } from 'next/document'
import { ColorSchemeScript } from '@mantine/core'
const SchemaMarkup = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Caravan Cleaning Melbourne - Free Quotes',
    description:
      'Get a free quote from Caravan Cleaning Melbourne for top-notch cleaning of caravans, motor homes, solar panels, and pre-sale detailing.',
    url: 'https://www.https://caravan-cleaning-melbourne.vercel.app/',
    telephone: '+61408 855 031',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Melbourne',
      addressRegion: 'VIC',
      postalCode: '3000',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -37.8136,
      longitude: 144.9631,
    },
    sameAs: [
      'https://www.facebook.com/caravancleaningmelbourne',
      'https://www.instagram.com/caravancleaningmelb',
    ],
    image:
      'https://caravan-cleaning-melbourne.vercel.app/images/schema-logo.jpg',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -37.8136,
        longitude: 144.9631,
      },
      geoRadius: '100000',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -37.8136,
        longitude: 144.9631,
      },
      geoRadius: '100000',
    },
    serviceType: [
      'Caravan Cleaning',
      'RV Cleaning',
      'Mobile Detailing',
      'Caravan Cleaning & Polishing',
      'Motorhome Cleaning & Polishing',
      'Camper Trailer Cleaning & Polishing',
      'Caravan Pre-Sale Detail',
      'Motorhome Pre-Sale Detail',
      'Camper Trailer Pre-Sale Detail',
      'Caravan Parts & Accessories',
      'Motorhome Parts & Accessories',
      'Camper Trailer Parts & Accessories',
      'Caravan Awning Stain Removal',
      'Motorhome Awning Stain Removal',
      'Camper Trailer Awning Stain Removal',
      'Caravan Cleaning Products',
      'Motorhome Cleaning Products',
      'Camper Trailer Cleaning Products',
      'Caravan Weather Protection',
      'Motorhome Weather Protection',
      'Camper Trailer Weather Protection',
    ],
  }
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <title>Caravan Cleaning Melbourne - Free Quotes</title>
        <meta
          name="description"
          content="Get a free quote from Caravan Cleaning Melbourne for top-notch cleaning of caravans, motor homes, solar panels, and pre-sale detailing."
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          property="og:title"
          content="Caravan Cleaning Melbourne - Free Quotes"
        />
        <meta
          property="og:description"
          content="Get a free quote from Caravan Cleaning Melbourne for top-notch cleaning of caravans, motor homes, solar panels, and pre-sale detailing."
        />
        <meta
          property="og:image"
          content="https://www.caravan-cleaning-melbourne.vercel.app/images/og-image.jpg"
        />
        <meta
          property="og:logo"
          content="https://www.caravan-cleaning-melbourne.vercel.app/images/schema-logo.jpg"
        />
        <meta
          property="og:url"
          content="https://www.caravan-cleaning-melbourne.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SchemaMarkup) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
