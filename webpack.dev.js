const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/scripts/index.js'),
   /* entry: {
        index: "./src/scripts/index.js",
        dogs: "./src/scripts/dogs.js",
    },*/
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },

    devServer: {
        static: path.resolve(__dirname, './dist'),
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Web Engineering Einzelprojekt DEV',
            filename: "index.html",
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new HtmlWebpackPlugin({
            title: 'The Dogs Page',
            filename: "dogs.html",
            template: path.resolve(__dirname, './src/pages/dogs.html'),
        }),

        new ESLintPlugin(),
    ],

    module: {
        // configuration regarding modules
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/, // files to exclude
                use: ['babel-loader'],
            },
            // CSS and SASS
            {
                test: /\.(scss|css)$/, // load files that end with scss and css
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
