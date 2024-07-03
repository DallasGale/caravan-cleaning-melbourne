const path = require('path')

const config = {
  stories: ['../src/components/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
    'storybook-dark-mode',
    '@storybook/addon-jest',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    // config.resolve.alias['firebase/auth'] = require.resolve('../src/wrappers/__mocks__/firebase/auth');
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    })
    ;(config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']),
      (config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@context': path.resolve(__dirname, '../src/context'),
        '@images': path.resolve(__dirname, '../public/images'),
      })

    return config
  },
  docs: {
    autodocs: 'tag',
  },
  babel: async (options) => {
    options.plugins.push(
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    )
    return options
  },
}
export default config
