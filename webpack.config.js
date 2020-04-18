
const path = require('path');
const config = require('config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CONFIG = config.has('public') ? config.get('public') : {};

module.exports = {
  entry: './src/app/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@config': path.resolve(__dirname, 'src/app/config.ts'),
      '@components': path.resolve(__dirname, 'src/app/components'),
      '@models': path.resolve(__dirname, 'src/app/models'),
      '@services': path.resolve(__dirname, 'src/app/services'),
      '@helpers': path.resolve(__dirname, 'src/app/helpers'),
      '@hoc': path.resolve(__dirname, 'src/app/hoc'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html',
    }),
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(CONFIG),
    }),
  ],
};
