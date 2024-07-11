interface ContentWrapperProps {
  children: React.ReactNode
  modifier?: string
}
const ContentWrapper = ({ children, modifier }: ContentWrapperProps) => {
  return <div className={`content-wrapper  ${modifier}`}>{children}</div>
}

export default ContentWrapper
