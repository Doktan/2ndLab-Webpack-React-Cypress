const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:  './src/index.js',
    output: {
        path:       path.join(__dirname, 'dist'),
        filename:   "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
      },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
    },
	plugins: [
        new HtmlWebpackPlugin({
          template: "./dist/index.html"
        })
    ]
}