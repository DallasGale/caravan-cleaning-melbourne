interface ContentWrapperProps {
  children: React.ReactNode
  noMargin?: boolean
  withCarousel?: boolean
}
const ContentWrapper = ({
  children,
  noMargin,
  withCarousel,
}: ContentWrapperProps) => {
  return (
    <div
      className={`content-wrapper ${noMargin ? 'no-margin' : ''} ${withCarousel ? 'carousel-content-wrapper' : ''}`}
    >
      {children}
    </div>
  )
}

export default ContentWrapper
