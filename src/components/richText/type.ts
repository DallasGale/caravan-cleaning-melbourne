import { subHeadingChildrenTypes, subHeadingRawTypes } from '../types'

export interface BlockProps {
  color: string
  block: {
    style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    listItem: string
    children: subHeadingChildrenTypes[]
  }
  className?: string
}

export interface RichTextProps {
  color?: string
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
