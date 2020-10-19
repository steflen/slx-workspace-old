import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

module.exports = function (options) {
  //bundle external deps
  return {
    // configs.resolve.plugins.push(new TsconfigPathsPlugin({ configFile: './tsconfig.base.json' }));
    plugins: [],
    resolve: {
      plugins: [new TsconfigPathsPlugin({ configFile: '../../tsconfig.base.json' })],
    },
    ...options,
    externals: [],
  };
};
