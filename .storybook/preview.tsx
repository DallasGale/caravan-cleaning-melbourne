import React, { useEffect } from 'react'
// Mantine
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

// Fonts
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/900.css'
import '../src/styles/global.scss'

export const decorators = [
  (renderStory: any) => (
    <MantineProvider defaultColorScheme="light">
      {renderStory()}
    </MantineProvider>
  ),
  (Story) => <Story />,
]
