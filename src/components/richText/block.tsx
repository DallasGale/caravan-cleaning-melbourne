import Span from './span'
import { BlockProps } from './type'

const Block = ({ block, color, className }: BlockProps) => {
  const renderSpans = () =>
    block.children.map((span, index) => (
      <Span key={span._key || index} span={span} />
    ))

  const renderListItem = () => (
    <li className={`rich-text-block__list-item ${color}`}>
      <span className={color}>{renderSpans()}</span>
    </li>
  )

  const renderHeading = (headingClass: string) => (
    <span className={`${color} ${headingClass} ${className}`}>
      {renderSpans()}
    </span>
  )

  const headingStyles = {
    h1: 'heading-1',
    h2: 'heading-2',
    h3: 'heading-3',
    h4: 'heading-4',
  }

  if (block.listItem === 'bullet') {
    return renderListItem()
  }

  if (block.style in headingStyles) {
    return renderHeading(
      headingStyles[block.style as keyof typeof headingStyles],
    )
  }

  return <p className={`${className} ${color}`}>{renderSpans()}</p>
}

export default Block
