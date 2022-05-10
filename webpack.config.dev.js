const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 8090,
    open: true,
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/js/utils'),
      '@components': path.resolve(__dirname, 'src/js/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/, // Extensiones que queremos que el loader procese
        exclude: /node_modules/, //Carpeta que queremos excluir
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css|.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        //Modulo nativo de Webpack
        test: /\.ttf/,
        type: 'asset/resource',
        generator: {
          filename: './assets/fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
}
