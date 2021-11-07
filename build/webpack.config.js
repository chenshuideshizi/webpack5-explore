const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = p => path.resolve(__dirname, '..', p)

const  config = {
    mode: 'production',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: resolve('dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            publicPath: resolve('dist')
        },
        port: 9001,
        compress: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    // 'style-loader', 
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: resolve('public/index.html'),
            filename: 'index.html'
        })
    ],
    optimization: {
        minimizer: [
          new CssMinimizerPlugin() // webpack@5 仅在生产环境开启 CSS 优化
        ]
      },
      performance: {
        hints: false
      }
}
module.exports = (env, argv) => {
    console.log('mode', argv)
    console.log('env', env)
    console.log('NODE_ENV', process.env.NODE_ENV)
    return config
}