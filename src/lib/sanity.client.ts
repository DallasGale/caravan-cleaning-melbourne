import { createClient, type SanityClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '~/lib/sanity.api'

export function getClient(previewToken?: string): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !previewToken,
    perspective: previewToken ? 'previewDrafts' : 'published',
    stega: {
      enabled: previewToken ? true : false,
      studioUrl: 'https://caravan-cleaning-melbourne.sanity.studio/',
    },
    token: previewToken,
  })
  return client
}
