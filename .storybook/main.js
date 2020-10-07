const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TranslocoScopedLibsWebpackPlugin = require('@ngneat/transloco-scoped-libs/webpack');
const dayjs = require('dayjs');
const packageJson = require('../package.json');
const webpack = require('webpack');

module.exports = {
  stories: ['../libs/**/*.stories.@(ts|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        // bugfix => https://github.com/storybookjs/storybook/tree/next/addons/storysource#displaying-full-source
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-events',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-design-assets',
  ],
  webpackFinal: async (config, { configType }) => {
    config.plugins.push(
      new TranslocoScopedLibsWebpackPlugin(),
      new webpack.DefinePlugin({
        BUILD_VERSION: JSON.stringify(packageJson.version),
        BUILD_TIME: JSON.stringify(dayjs().format('YYYY-MM-DD HH:mm:ss')),
      }),
    );
    config.resolve.plugins.push(new TsconfigPathsPlugin({ configFile: './tsconfig.base.json' }));

    return config;
  },
};
