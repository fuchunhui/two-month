module.exports = {
  chainWebpack: config => {
    config
      .entry('app')
      .clear()
      .add('./src/main.ts')
      .end();
  },
  devServer: {
    port: 8090
  }
};
