const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path') 

const config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
   module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './app/index.html'})
  ]
}

module.exports = config;