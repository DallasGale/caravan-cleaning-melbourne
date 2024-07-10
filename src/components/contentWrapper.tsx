interface ContentWrapperProps {
  children: React.ReactNode
  noMargin?: boolean
  modifier?: string
}
const ContentWrapper = ({
  children,
  noMargin,
  modifier,
}: ContentWrapperProps) => {
  return (
    <div
      className={`content-wrapper ${noMargin ? 'no-margin' : ''}${modifier}`}
    >
      {children}
    </div>
  )
}

export default ContentWrapper
