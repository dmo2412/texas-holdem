const path = require('path')
const webpack = require('webpack')

const config = {
    entry: './javascript/src/index.js',
    output: {
        filename: 'bundle.js',
        // path: __dirname + '/dist'
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.ProgressPlugin()
    ],
    devtool: 'source-map'
}

module.exports = config;