import Header from './global/header'
import { useLiveQuery } from 'next-sanity/preview'
import {
  ContactFormContent,
  contactFormQuery,
  FooterContent,
  footerQuery,
  NavigationContent,
  navigationQuery,
} from '~/lib/sanity.queries'
import Footer from './global/footer'
import Contact from './global/contact'

type ContainerProps = {
  children: React.ReactNode
  draftMode: boolean
  token: string
  navigationContent: NavigationContent
  footerContent: FooterContent
  contactFormContent: ContactFormContent
}

export default function Container({
  children,
  draftMode,
  token,
  contactFormContent: initialContactFormContent,
  navigationContent: initialNavigationContent,
  footerContent: initialFooterContent = null,
}: ContainerProps) {
  const [liveNavigationContent] = useLiveQuery<NavigationContent>(
    initialNavigationContent,
    navigationQuery,
    { enabled: draftMode },
  )

  const navigationContent = draftMode
    ? liveNavigationContent
    : initialNavigationContent

  // Ensure navigationContent is an array and has at least one item
  const navigation =
    Array.isArray(navigationContent) && navigationContent.length > 0
      ? navigationContent[0]
      : { navItems: [], phone: '' }

  const [liveFooterContent] = useLiveQuery<FooterContent>(
    initialFooterContent ?? null,
    footerQuery,
    { enabled: draftMode },
  )

  const footerContent = draftMode ? liveFooterContent : initialFooterContent

  const [liveContactFormContent] = useLiveQuery<ContactFormContent>(
    initialContactFormContent ?? null,
    contactFormQuery,
    { enabled: draftMode },
  )

  const contactFormContent = draftMode
    ? liveContactFormContent
    : initialContactFormContent

  return (
    <div className="container">
      <Header
        navItems={navigation.navItems || []}
        phone={navigation.phone || ''}
      />
      <main>{children}</main>
      <Contact {...contactFormContent} />
      <Footer {...footerContent} />
    </div>
  )
}
