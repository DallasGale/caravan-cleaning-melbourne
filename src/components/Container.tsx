import Link from 'next/link'
import Header from './global/header'
import { useLiveQuery } from 'next-sanity/preview'
import { NavigationContent, navigationQuery } from '~/lib/sanity.queries'
import { GetStaticProps } from 'next'
import { getClient } from '~/lib/sanity.client'
import { useEffect, useState } from 'react'

type ContainerProps = {
  children: React.ReactNode
  draftMode: boolean
  token: string
}
export default function Container({
  children,
  draftMode,
  token,
}: ContainerProps) {
  const [navigationContent, setNavigationContent] =
    useState<NavigationContent | null>(null)

  useEffect(() => {
    const client = getClient(draftMode ? token : undefined)
    client.fetch(navigationQuery).then(setNavigationContent)
  }, [draftMode, token])

  const [liveNavigationContent] = useLiveQuery<NavigationContent>(
    navigationContent || { navItems: [], phone: '' },
    navigationQuery,
    { enabled: draftMode },
  )

  const navigation: NavigationContent =
    liveNavigationContent || navigationContent

  if (!navigationContent) {
    return <div>Loading...</div>
  }

  return (
    <div className="container">
      <Header
        navItems={Array.isArray(navigation) ? navigation[0]?.navItems : []}
        phone={Array.isArray(navigation) ? navigation[0]?.phone : ''}
      />
      <main>{children}</main>
      <footer className="footer">Footer</footer>
    </div>
  )
}
