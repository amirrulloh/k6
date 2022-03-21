const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const yaml = require('js-yaml')
const fs = require('fs')

const scenarios = yaml.load(fs.readFileSync('./scenarios-map.yaml', 'utf8'))

module.exports = {
  mode: 'production',
  entry: scenarios,
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      '@apis': path.resolve(__dirname, './apis'),
      '@data': path.resolve(__dirname, './data'),
      '@utils': path.resolve(__dirname, './utils'),
      '@generator': path.resolve(__dirname, './generator')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  target: 'web',
  plugins: [
    new CopyPlugin({
      patterns: [{
        from: './data/*.csv',
        to: path.resolve(__dirname, 'dist'),
        noErrorOnMissing: true
      },
      {
        from: './data/*.json',
        to: path.resolve(__dirname, 'dist'),
        noErrorOnMissing: true
      }]
    })
  ],
  externals: /k6(\/.*)?/,
  optimization: {
    minimize: false
  }
}
