const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/App.ts',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Solo Test',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'assets/fonts/*.*',
                    to: 'fonts/[name][ext]',
                },
                {
                    from: 'assets/images/splash.png',
                    to: 'images/[name][ext]',
                },
                {
                    from: 'assets/manifest.json',
                    to: '[name][ext]',
                },
                {
                    from: 'assets/spritesheets/*.png',
                    to: 'images/[name][ext]',
                },
                {
                    from: 'assets/spritesheets/*.json',
                    to: 'data/[name][ext]',
                },
            ],
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
};