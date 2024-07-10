import Block from './block'
import { RichTextProps } from './type'

const RichText = ({ content, className, color }: RichTextProps) => {
  console.log({ content, className, color })
  const renderContent = () => {
    const result = []
    let currentList: JSX.Element[] = []

    const flushList = () => {
      if (currentList.length > 0) {
        result.push(
          <ul
            key={`list-${result.length}`}
            className={`rich-text-block__list ${color}`}
          >
            {currentList}
          </ul>,
        )
        currentList = []
      }
    }

    content.forEach((block, index) => {
      if (block.listItem === 'bullet') {
        currentList.push(
          <Block
            key={block._key || index}
            block={block}
            color={color}
            className={className || ''}
          />,
        )
      } else {
        flushList()
        result.push(
          <Block
            key={block._key || index}
            block={block}
            color={color}
            className={className || ''}
          />,
        )
      }
    })

    flushList() // In case the content ends with a list item

    return result
  }

  return <>{renderContent()}</>
}

export default RichText
