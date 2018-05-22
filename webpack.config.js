
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "src/index.html"),
    filename: "./index.html"
});

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }, 
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader" 
            },
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {  // images loader
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          }],
          exclude: /node_modules/,
          include: __dirname,
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loaders: ['file-loader?name=fonts/[name].[ext]'],
        },
      ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001,
        contentBase: __dirname + '/src/',
    }
};