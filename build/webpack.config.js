const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const resolve = p => path.resolve(__dirname, '..', p)
module.exports = {
    mode: 'production',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    // 'style-loader', 
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    optimization: {
        minimizer: [
          new CssMinimizerPlugin() // webpack@5 仅在生产环境开启 CSS 优化
        ]
      }
}