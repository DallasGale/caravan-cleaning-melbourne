import '@mantine/core/styles.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '~/styles/index.scss'

import { createTheme, MantineProvider } from '@mantine/core'
import { VisualEditing } from '@sanity/visual-editing/next-pages-router'

import type { AppProps } from 'next/app'
import { lazy, Suspense } from 'react'

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  const theme = createTheme({
    /** Put your mantine theme override here */
  })
  return (
    <MantineProvider theme={theme}>
      <>
        {draftMode ? (
          <PreviewProvider token={token}>
            <Component {...pageProps} />
            <Suspense>
              <VisualEditing />
            </Suspense>
          </PreviewProvider>
        ) : (
          <Component {...pageProps} />
        )}
      </>
    </MantineProvider>
  )
}
