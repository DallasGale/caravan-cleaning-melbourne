export type richTextRawTypes = {
  children: richTextChildrenTypes[]
  listItem: string
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  _key: string
}

export type richTextChildrenTypes = {
  _type: string
  _key: string
  text: string
  marks: string[] // strong, italic etc...
}
