import '@mantine/core/styles.css'
import '~/styles/global.scss'

import { createTheme, MantineProvider } from '@mantine/core'

import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { lazy } from 'react'

export interface SharedPageProps {
  preview: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

const regular = Poppins({
  variable: '--font-family-regular',
  subsets: ['latin'],
  weight: '400',
})
const medium = Poppins({
  variable: '--font-family-medium',
  subsets: ['latin'],
  weight: '500',
})

const bold = Poppins({
  variable: '--font-family-bold',
  subsets: ['latin'],
  weight: '700',
})

const semiBold = Poppins({
  variable: '--font-family-bold',
  subsets: ['latin'],
  weight: '600',
})

const extraBold = Poppins({
  variable: '--font-family-bold',
  subsets: ['latin'],
  weight: '800',
})

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { preview, token } = pageProps
  const theme = createTheme({
    /** Put your mantine theme override here */
  })
  return (
    <MantineProvider theme={theme}>
      <style jsx global>
        {`
          :root {
            --font-family-regular: ${regular.style.fontFamily};
            --font-family-medium: ${medium.style.fontFamily};
            --font-family-bold: ${bold.style.fontFamily};
            --font-family-semi-bold: ${semiBold.style.fontFamily};
            --font-family-extra-bold: ${extraBold.style.fontFamily};
          }
        `}
      </style>
      {preview ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </MantineProvider>
  )
}
