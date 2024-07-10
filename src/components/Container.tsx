import Header from './global/header'
import { useLiveQuery } from 'next-sanity/preview'
import { NavigationContent, navigationQuery } from '~/lib/sanity.queries'
import { getClient } from '~/lib/sanity.client'
import { useEffect, useState } from 'react'
import Footer from './global/footer'
import Testimonials from './global/testimonials'
import Contact from './global/contact'

type ContainerProps = {
  children: React.ReactNode
  draftMode: boolean
  token: string
  navigationContent: NavigationContent
}

export default function Container({
  children,
  draftMode,
  token,
  navigationContent: initialNavigationContent,
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

  return (
    <div className="container">
      <Header
        navItems={navigation.navItems || []}
        phone={navigation.phone || ''}
      />
      <main>{children}</main>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
