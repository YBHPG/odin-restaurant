const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


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