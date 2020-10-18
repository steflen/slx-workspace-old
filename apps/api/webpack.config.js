import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

module.exports = function (options) {
  //bundle external deps
  return {
    // config.resolve.plugins.push(new TsconfigPathsPlugin({ configFile: './tsconfig.base.json' }));
    plugins: [],
    resolve: {
      plugins: [new TsconfigPathsPlugin({ configFile: '../../tsconfig.base.json' })],
    },
    ...options,
    externals: [],
  };
};
