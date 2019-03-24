const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = {
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        },
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            includePaths: [
                                path.join(__dirname, 'node_modules/normalize-scss/sass')
                            ]
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
};
