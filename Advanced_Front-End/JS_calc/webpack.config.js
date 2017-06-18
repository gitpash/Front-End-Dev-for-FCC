const HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm
const webpack = require('webpack') //to access built-in plugins
const path = require('path')

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.css$/,
      loaders: [
        'style-loader?sourceMap',
        'css-loader?sourceMap'
      ],
    }],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new HtmlWebpackPlugin({template: './app/index.html'}),
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('process.env.NODE_ENV')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}
module.exports = config