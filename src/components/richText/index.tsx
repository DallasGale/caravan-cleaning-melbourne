import Block from './block'
import { RichTextProps } from './type'

const RichText = ({ content, className }: RichTextProps) => {
  return (
    <>
      {content.map((block) => (
        <Block key={block._key} block={block} className={className || ''} />
      ))}
    </>
  )
}

export default RichText
