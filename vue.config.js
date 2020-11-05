const CopyWebpackPlugin = require('copy-webpack-plugin'); // eslint-disable-line

module.exports = {
  devServer: {
    port: 8090,
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{
          from: 'node_modules/sql.js/dist/sql-wasm.wasm',
          to: 'js'
        }]
      })
    ]
  }
};
