module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                use: {
                    loader: 'babel-loader',
                },
                include: /src/,
            },
            {
                test: /\.jsx?$/i,
                enforce: 'pre',
                loader: "eslint-loader",
                include: /src/
            }

        ]
    }
}