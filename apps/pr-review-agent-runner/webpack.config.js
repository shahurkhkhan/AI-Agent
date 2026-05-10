const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  output: {
<<<<<<< HEAD
     path: join(__dirname, '../../dist/apps/pr-review-agent-runner'),
=======
    path: join(__dirname, '../../actions/pr-review-agent/dist'),
>>>>>>> 14c10c1 (build change)
    clean: true,
    ...(process.env.NODE_ENV !== 'production' && {
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    }),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      externals: [nodeExternals()],
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
      sourceMap: true
    }),
  ],
};
