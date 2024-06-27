import Link from 'next/link'
import Header from './global/header'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <footer className="footer">Footer</footer>
    </div>
  )
}
