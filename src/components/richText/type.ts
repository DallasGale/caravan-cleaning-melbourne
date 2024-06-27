export interface BlockProps {
  block: {
    children: any[]
  }
  className: string
}

export interface RichTextProps {
  content: any[]
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
