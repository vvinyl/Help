const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devServer: {
    static: path.join(__dirname, './build'),
    port: 9001
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Nasza pierwsza aplikacja TypeScript',
      template: './build/index.html', // Plik szablonu (upewnij się, że istnieje w katalogu src)
      path: path.join(__dirname,  "./build/"),
      filename: 'index.html' // Plik wynikowy w katalogu build

    })
  ]
};
