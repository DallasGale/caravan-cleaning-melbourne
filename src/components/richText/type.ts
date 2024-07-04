import { subHeadingChildrenTypes, subHeadingRawTypes } from '../types'

export interface BlockProps {
  block: {
    children: subHeadingChildrenTypes[]
  }
  className: string
}

export interface RichTextProps {
  content: subHeadingRawTypes[]
  className?: string
}

export type ContentTypes = {
  children: SpanChildrenTypes[]
}

export interface SpanProps {
  span: SpanChildrenTypes
}

export type SpanChildrenTypes = {
  marks: string[]
  text: string
  _key: string
}
