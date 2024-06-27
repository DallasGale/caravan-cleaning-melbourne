import Span from './span'
import { BlockProps } from './type'

const Block = ({ block, className }: BlockProps) => {
  return (
    <p className={className}>
      {block.children.map((span, index) => {
        return <Span key={span._key || index} span={span} />
      })}
    </p>
  )
}

export default Block
