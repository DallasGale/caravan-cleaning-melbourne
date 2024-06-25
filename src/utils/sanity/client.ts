import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '18hgnby7',
  dataset: 'production',
  apiVersion: '2024-03-11',
  // Set to `true` for production environments
  useCdn: true,
})
