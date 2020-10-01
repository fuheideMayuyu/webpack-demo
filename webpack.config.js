const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'webpack-numbers.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'webpackNumbers',
    libraryTarget: 'umd',
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
  optimization:{
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks:{
      cacheGroups:{
        vendor:{
          test:/[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks:'all'
        }
      }
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // hot: true
  },

  plugins:[
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
  ]
};