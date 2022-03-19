const {merge} = require('webpack-merge')
const webpackbase = require('./webpack.config.base')

module.exports = merge(webpackbase,{
  mode: 'development',
  // 日志消息不需要传出来
  stats: {children: false}
})