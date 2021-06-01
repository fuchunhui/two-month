const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    port: 8090
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{
          from: 'node_modules/sql.js/dist/sql-wasm.wasm',
          to: 'wasm'
        }]
      })
    ],
    externals: {
      fs: 'fs'
    },
    resolve: {
      modules: [
        resolve('src'),
        resolve('src/components')
      ],
      alias: {
        '@': resolve('src'),
        'src': resolve('src'),
        'api': resolve('src/api/'),
        'assets': resolve('src/assets'),
        'css': resolve('src/assets/css'),
        'components': resolve('src/components'),
        'db': resolve('src/components/db'),
        'directive': resolve('src/directive')
      },
      fallback: { // TODO 临时兼容修复
        'path': require.resolve('path-browserify'),
        'crypto': require.resolve('crypto-browserify'),
        'stream': require.resolve('stream-browserify')
      }
    }
  }
};
