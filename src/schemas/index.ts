import { SchemaTypeDefinition } from 'sanity'

import featureCtaContent from './featureCtaContent'
import blockContent from './blockContent'
import post from './post'

export const schemaTypes = [featureCtaContent, post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [featureCtaContent, post, blockContent],
}
