const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const devConfig = {
    mode: 'development',
    entry: path.join(__dirname, '../src/index.jsx'),
    output: {
        path: path.join(__dirname, '../public'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                exclude: /\node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader?modules',

                    },
                    {
                        loader: "less-loader",

                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.min.css$/i,
                use: ['style-loader', "css-loader"]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '../public'),
        compress: true,
        host: '127.0.0.1',
        port: 3000,
        open: true
    },
}

module.exports = merge(devConfig, baseConfig)