const SchemaMarkup = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Caravan Cleaning Melbourne',
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
      'https://www.https://caravan-cleaning-melbourne.vercel.app/images/schema-logo.jpg',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -37.8136,
        longitude: 144.9631,
      },
      geoRadius: '100000',
    },
    serviceType: [
      'Mobile Caravan Cleaning',
      'On-Site RV Cleaning',
      'Mobile Detailing',
    ],
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
  return schemaData
}
