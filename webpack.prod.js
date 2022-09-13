const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/scripts/index.js'),
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
            title: "Web Engineering Einzelprojekt PROD",
            template: path.resolve(__dirname, './src/index.html'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/, // files to exclude
                use: ['babel-loader'],
            },
            // CSS and SASS
            {
                test: /\.(scss|css)$/,  // load files that end with scss and css
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            { // define typescript loader and file extensions
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.ts'], // files to load
    },
};