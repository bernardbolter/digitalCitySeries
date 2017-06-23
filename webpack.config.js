var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var HtmlWebpackPLugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require( 'copy-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
          plugins: ['transform-runtime', 'transform-async-to-generator', 'transform-decorators-legacy', 'transform-class-properties']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: './gfx/[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
    new HtmlWebpackPLugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new UglifyJSPlugin({
      sourceMap: true,
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
        screw_ie8: true
      },
      mangle: {
        except: [
          '$', 'webpackJsonp'
        ],
        screw_ie8: true,
        keep_fnames: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })
  ]
};
