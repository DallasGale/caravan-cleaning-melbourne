import Head from 'next/head'

function CanonicalTag({ path }) {
  const baseUrl = 'https://www.caravancleaningmelbourne.com.au'
  const canonicalUrl = `${baseUrl}${path}`

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}

export default CanonicalTag
