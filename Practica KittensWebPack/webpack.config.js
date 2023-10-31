const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/js/application.js',
  mode: 'development',
  output: {
    filename: 'application_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },  
  plugins: [new HtmlWebpackPlugin({

    template: "./src/index.html"
  })],
  module: {
    rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ]
        }
    ]
  },
  

  
};