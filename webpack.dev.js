const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        static: [
            {
                directory: path.join(__dirname, 'assets/fonts'),
                publicPath: 'fonts',
            },
            {
                directory: path.join(__dirname, 'assets/images'),
                publicPath: 'images',
            },
            {
                directory: path.join(__dirname, 'assets/spritesheets'),
                publicPath: 'images',
            },
            {
                directory: path.join(__dirname, 'assets/spritesheets'),
                publicPath: 'data',
            },
        ],
    },
});