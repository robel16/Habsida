const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  // Input file
  entry: [
    'webpack-dev-server/client?http://127.0.0.0:8080/',
    'webpack/hot/only-dev-server',
    './src/js/index.js'
  ],

  devServer: {
    allowedHosts: ['all'],
    overlay: true,
  },

  // entry: [
  //  "webpack-dev-server/client?http://127.0.0.0:8080",
  //  "webpack/hot/only-dev-server",
  //  "./src"
  //],

  //Output file
  output: {
    filename: './js/bundle.js'
  },

  // Source maps for ease of debugging
  devtool: 'source-map',

  module: {
    rules: [
      //Transpiling js with babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // Compiling SCSS to CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },

      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]'
          }
        ]
      },

      // Connect images from css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./static/[name].[ext]'
          }
        ]
      }
    ]
  },
  plugins: [
    //We connect the html file, styles and scripts will be built in automatically

    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),

    //We put the styles in a separate file
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    // Copying pictures
    new CopyWebpackPlugin([
      {
        from: './src/img',
        to: 'img'
      }
    ]),

    new webpack.HotModuleReplacementPlugin()
  ]
}
