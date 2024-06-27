import type { NextApiRequest, NextApiResponse } from 'next'

import { projectId, dataset, apiVersion } from '~/lib/sanity.api'

import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { createClient } from 'next-sanity'

const token = process.env.SANITY_API_READ_TOKEN
if (!token) {
  throw new Error(
    'A secret is provided but there is no `SANITY_API_READ_TOKEN` environment variable setup.',
  )
}
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string | void>,
) {
  // Check the secret and next parameters
  const { secret } = req.query

  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json('Invalid token')
  }

  // Enable Draft Mode by setting the cookies
  res.setDraftMode({ enable: true })

  // Fetch the document to preview
  const document = await client.fetch(`*[_type == "homepage"]`)

  if (!document) {
    return res.status(404).json('Document not found')
  }

  // Redirect to the path from the fetched document
  res.writeHead(307, { Location: `""` })
  res.end()
}
