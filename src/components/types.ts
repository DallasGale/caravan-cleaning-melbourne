export type subHeadingRawTypes = {
  children: subHeadingChildrenTypes[]
  listItem: string
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  _key: string
}

export type subHeadingChildrenTypes = {
  _type: string
  _key: string
  text: string
  marks: string[] // strong, italic etc...
}
