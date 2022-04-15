const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const esLintPlugin = (isDev) => isDev ? [] : [ new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] }) ];

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        port: 8080,
        static: {
            directory: path.join(__dirname, 'public'),
        },
    }
};

module.exports = ({development}) => ({
    mode: development ? 'development' : 'production',
    devtool: development ? 'inline-source-map' : false,
    entry: {
        main: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contentHash].js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    'ts-loader',
                    'babel-loader'
                ],

            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'assets/resource',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css'],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.css']
    },
    plugins: [
        ...esLintPlugin(development),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[contentHash].css'
        }),
        new CopyPlugin({
            patterns: [{
                from: 'public',
                noErrorOnMissing: true,
            }],
        }),
    ],
    ...devServer(development),
});
