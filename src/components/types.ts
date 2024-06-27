export type subHeadingRawTypes = {
  children: subHeadingChildrenTypes[]
}

export type subHeadingChildrenTypes = {
  _type: string
  _key: string
  text: string
  marks: string[] // strong, italic etc...
}
