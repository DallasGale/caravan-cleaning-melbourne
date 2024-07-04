export type subHeadingRawTypes = {
  children: subHeadingChildrenTypes[]
  _key: string
}

export type subHeadingChildrenTypes = {
  _type: string
  _key: string
  text: string
  marks: string[] // strong, italic etc...
}
