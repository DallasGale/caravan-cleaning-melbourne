interface DropdownProps {
  show: boolean
  onMouseEnter: () => void
  onMouseLeave: (event: any) => void
  children: React.ReactNode
}

const Dropdown = ({
  show,
  onMouseEnter,
  onMouseLeave,
  children,
}: DropdownProps) => {
  console.log({ show })
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`nav__dropdown ${show ? 'show' : 'hide'}`}
    >
      <div className="nav__dropdown-inner">{children}</div>
    </div>
  )
}
export default Dropdown
