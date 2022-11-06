const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

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
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[contenthash].css' : '[name]_bundle.css'
      }),
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
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
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
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin()
      ]
    }
  }
}