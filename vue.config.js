const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '',
  outputDir: 'juejin',
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
    // config.resolve.extensions.set(['.vue', '.json']) 
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icon'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}