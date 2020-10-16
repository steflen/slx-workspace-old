const webpack = require('webpack');
const TranslocoScopedLibsWebpackPlugin = require('@ngneat/transloco-scoped-libs/webpack');
const dayjs = require('dayjs');
const packageJson = require('../../package.json');

module.exports = {
  plugins: [
    new TranslocoScopedLibsWebpackPlugin(),
    new webpack.DefinePlugin({
      BUILD_VERSION: JSON.stringify(packageJson.version),
      BUILD_TIME: JSON.stringify(dayjs().format('YYYY-MM-DD HH:mm:ss')),
    }),
  ],
};
