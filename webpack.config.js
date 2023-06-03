const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const faviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        home: './src/home/home.js',
        menu: './src/menu/menu.js',
        contacts: './src/contacts/contacts.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist,'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
        }),
        new faviconsWebpackPlugin({
            logo: './src/favicon-256.png',
            mode: 'webapp',
            devMode: 'webapp',
            prefix: '/assets/favicons/',
            cache: true,
            inject: HtmlWebpackPlugin => {
                return true
            },
            favicons: {
                background: '#fff',
                theme_color: '#333',
            },
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            /* {
                test: /\.json$/i,
                use: 'json-loader',
            } */
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
};