import { Head, Html, Main, NextScript } from 'next/document'
import { ColorSchemeScript } from '@mantine/core'
const SchemaMarkup = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Caravan Cleaning Melbourne - Free Quotes',
    description:
      'Get a free quote from Caravan Cleaning Melbourne for top-notch cleaning of caravans, motor homes, solar panels, and pre-sale detailing.',
    url: 'https://www.https://caravancleaningmelbourne.com.au/',
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
    image: 'https://caravancleaningmelbourne.com.au/images/schema-logo.jpg',
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

        <meta
          property="og:url"
          content="https://www.caravancleaningmelbourne.com.au"
        />
        <meta property="og:type" content="website" />
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
          content="https://opengraph.b-cdn.net/production/images/b612bf11-a192-43fd-aeff-a30fdd114e85.jpg?token=vtm24yKxzDrBi7XOdpQ1oDMhoRSQAh_YDANrdKb3iSA&height=630&width=1200&expires=33263061277"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://www.caravancleaningmelbourne.com.au"
        />
        <meta
          property="twitter:url"
          content="https://www.caravancleaningmelbourne.com.au/"
        />
        <meta
          name="twitter:title"
          content="Caravan Cleaning Melbourne - Free Quotes"
        />
        <meta
          name="twitter:description"
          content="Get a free quote from Caravan Cleaning Melbourne for top-notch cleaning of caravans, motor homes, solar panels, and pre-sale detailing."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/b612bf11-a192-43fd-aeff-a30fdd114e85.jpg?token=vtm24yKxzDrBi7XOdpQ1oDMhoRSQAh_YDANrdKb3iSA&height=630&width=1200&expires=33263061277"
        />

        <meta
          name="keywords"
          content="
          Caravan Cleaning,
            RV Cleaning,  
            Mobile Detailing,
            Caravan Cleaning & Polishing,
            Motorhome Cleaning & Polishing,
            Camper Trailer Cleaning & Polishing,
            Caravan Pre-Sale Detail,
            Motorhome Pre-Sale Detail,
            Camper Trailer Pre-Sale Detail,
            Caravan Parts & Accessories,
            Motorhome Parts & Accessories,
            Camper Trailer Parts & Accessories,
            Caravan Awning Stain Removal,
            Motorhome Awning Stain Removal,
            Camper Trailer Awning Stain Removal,
            Caravan Cleaning Products,
            Motorhome Cleaning Products,
            Camper Trailer Cleaning Products,
            Caravan Weather Protection,
            Motorhome Weather Protection,
            Camper Trailer Weather Protection"
        />
        <meta name="author" content="Caravan Cleaning Melbourne" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
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
