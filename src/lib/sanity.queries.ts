import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const homepageQuery = groq`*[_type == "homepage"]`

export async function getHomepageContent(client: SanityClient): Promise<any> {
  console.log('Executing homepage query')
  const result = await client.fetch(homepageQuery)
  console.log('Query result:', result)
  return result
}
