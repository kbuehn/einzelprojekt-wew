const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '/src/index.ts'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
            title: "Einzelprojekt WEW",
            template: path.resolve(__dirname, './src/index.html'),
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            title: "About",
            template: path.resolve(__dirname, './src/pages/about.html'),
            filename: "./src/pages/about.html"
        }),
        new ESLintPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: [path.resolve(__dirname, './src')],
                use: 'ts-loader',
            },
            {
                test: /\.(scss|css)$/,  // load files that end with scss and css
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.html', 'css'],
    },
};
