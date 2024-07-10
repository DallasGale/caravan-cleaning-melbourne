import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Dropdown from './dropdown'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Navigation/Dropdown',
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Open: Story = {
  args: {
    onMouseEnter: () => console.log('Mouse Enter'),
    onMouseLeave: () => console.log('Mouse Leave'),
    show: true,
    mainLinks: [
      {
        _key: '123',
        heading: 'Caravan Cleaning',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/link',
        image: {
          _key: 'image-164x91-0',
          imageAlt: 'Image Alt Text',
          asset: {
            url: 'https://cdn.sanity.io/images/18hgnby7/production/12efa68c7ba4bfe89ca98ed339f215633c2956cb-164x91.svg',
          },
        },
        additionalListHeading: 'Additional List Heading',
        additionalList: [
          {
            _key: '123',
            heading: 'Additional List Item',
            link: '/link',
          },
          {
            _key: '233',
            heading: 'Additional List Item',
            link: '/link',
          },
          {
            _key: '434',
            heading: 'Additional List Item',
            link: '/link',
          },
          {
            _key: '544',
            heading: 'Additional List Item',
            link: '/link',
          },
        ],
      },

      {
        _key: '123',
        heading: 'Motorhome Cleaning',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/link',
        image: {
          _key: 'image-164x91-0',
          imageAlt: 'Image Alt Text',
          asset: {
            url: 'https://cdn.sanity.io/images/18hgnby7/production/12efa68c7ba4bfe89ca98ed339f215633c2956cb-164x91.svg',
          },
        },
      },
      {
        _key: '123',
        heading: 'Full Pre-Sale Detail',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/link',
        image: {
          _key: 'image-164x91-0',
          imageAlt: 'Image Alt Text',
          asset: {
            url: 'https://cdn.sanity.io/images/18hgnby7/production/12efa68c7ba4bfe89ca98ed339f215633c2956cb-164x91.svg',
          },
        },
      },
    ],
  },
}
