const {merge} = require('webpack-merge')
const webpackbase = require('./webpack.config.base')

const TerserPlugin = require("terser-webpack-plugin")
module.exports = merge(webpackbase,{
  mode: 'production',
  // 日志消息不需要传出来
  stats: {children: false},
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    // 避免重复引入依赖
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
})