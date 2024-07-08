interface ContentWrapperProps {
  children: React.ReactNode
  noMargin?: boolean
}
const ContentWrapper = ({ children, noMargin }: ContentWrapperProps) => {
  return (
    <div className={`content-wrapper ${noMargin ? 'no-margin' : ''}`}>
      {children}
    </div>
  )
}

export default ContentWrapper
