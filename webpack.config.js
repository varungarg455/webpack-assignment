const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
  },
 output: {
   path: path.join(__dirname, '/build'),
   filename: 'index.bundle.js',
 },
 devServer: {
   port: 3000,
   watchContentBase: true,
   historyApiFallback: true,
 },
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     }
   ]
 },
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}