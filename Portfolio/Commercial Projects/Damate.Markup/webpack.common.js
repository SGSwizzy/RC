const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    target: ['web', 'es5'],
    context: path.resolve(__dirname, 'Source'),
    devtool: 'source-map',
    entry: ['./scripts/bundle.js', './scss/main.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'Content/scripts/bundle.js',
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../',
                        }
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "autoprefixer",
                                    "postcss-preset-env"
                                ],
                            }
                        }
                    },
                    {
                        loader: "resolve-url-loader",
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS,
                    },
                ],
            },
            {
                test: /\.pug$/,
                include: path.join(__dirname, 'Source', 'pug'),
                use: [
                    {
                        loader: "pug-loader?pretty=true"
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                type: "asset",
                generator: {
                    filename: 'Content/[file]'
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/,
                type: "asset",
                exclude: /sprite\.svg$/,
                generator: {
                    filename: 'Content/[file]',
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "Content/css/[name].css",
            chunkFilename: "./[id].[hash].css",
        }),
        ...glob.sync('./Source/pug/*.pug').map((htmlFile) => {
            return new HtmlWebpackPlugin({
                inject: true,
                minify: false,
                filename: `${path.basename(htmlFile, '.pug')}.html`, //.replace(/\.pug/,'.html'),
                template: `pug/${path.basename(htmlFile)}`,
            });
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'Source/favicon.ico'),
                    to: path.resolve(__dirname, 'dist'),
                },
                {
                    from: path.resolve(__dirname, 'Source/images/sprite.svg'),
                    to: path.resolve(__dirname, 'dist/Content/images'),
                },
            ],
        }),
    ],
    stats: {
        children: true,
        errorDetails: true,
    },
}