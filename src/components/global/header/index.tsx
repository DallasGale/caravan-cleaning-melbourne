import { NavigationContent } from '~/lib/sanity.queries'
import Nav from './nav'

const Header = ({ navItems, phone }: NavigationContent) => {
  return (
    <header className="header">
      <Nav navItems={navItems} phone={phone} />
    </header>
  )
}
export default Header
