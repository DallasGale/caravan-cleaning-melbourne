import Block from './block'
import { RichTextProps } from './type'

const RichText = ({ content, className, color }: RichTextProps) => {
  return (
    <>
      {content.map((block) => (
        <Block
          key={block._key}
          block={block}
          color={color}
          className={className || ''}
        />
      ))}
    </>
  )
}

export default RichText
