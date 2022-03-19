const path = require('path')
const utils = require('./utils')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { DefinePlugin } = require('webpack');
const webpackConfig = {
  target: 'node',
  entry: {
    // [name]指定为server
    server: path.join(utils.APP_PATH, '/index.js')
  },
  output: {
    path: utils.DIST_PATH,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, '/node_modules')]
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    // new DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') ? 'production' : 'development'
    //   }
    // })
  ]
}
module.exports = webpackConfig