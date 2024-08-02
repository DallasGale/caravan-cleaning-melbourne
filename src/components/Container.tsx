import Header from './global/header'
import { useLiveQuery } from 'next-sanity/preview'
import {
  FooterContent,
  footerQuery,
  NavigationContent,
  navigationQuery,
} from '~/lib/sanity.queries'
import { getClient } from '~/lib/sanity.client'
import { useEffect, useState } from 'react'
import Footer from './global/footer'
import Contact from './global/contact'

type ContainerProps = {
  children: React.ReactNode
  draftMode: boolean
  token: string
  navigationContent: NavigationContent
  footerContent: FooterContent
}

export default function Container({
  children,
  draftMode,
  token,
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

  // console.log({ footerContent })

  return (
    <div className="container">
      <Header
        navItems={navigation.navItems || []}
        phone={navigation.phone || ''}
      />
      <main>{children}</main>
      <Contact />
      <Footer {...footerContent} />
    </div>
  )
}
