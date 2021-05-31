const path = require('path');
const baseConfig = require('./webpack.config.base');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = {
    mode: 'production',
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        path: path.join(__dirname, '../lib/'),
        filename: 'index.js',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                exclude: /\node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader?modules" },
                    { loader: "less-loader" }
                ]

            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ],
    externals: {
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDom',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom'
        }
    }

}

module.exports = merge(prodConfig, baseConfig)