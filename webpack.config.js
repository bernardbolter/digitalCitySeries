var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var HtmlWebpackPLugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/gateway.js',
  output: {
    path: path.resolve(__dirname, 'outbound'),
    filename: 'mashup.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }),
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime', 'transform-async-to-generator', 'transform-decorators-legacy']
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
    new HtmlWebpackPLugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
