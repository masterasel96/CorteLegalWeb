const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {

  const { mode } = argv
  const isProduction = mode === 'production'

  return {
    entry: {
      index: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction ? '[name].[contenthash].js' : '[name]_bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        }
      ]
    },
    devServer: {
      proxy: {
        '*': 'http://localhost:8080?',
      }
    }
  }
}