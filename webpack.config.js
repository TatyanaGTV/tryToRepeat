const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = (env) => {
    return {
        mode: env.mode ?? 'development',
        entry: './src/gameprocess.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'build'),
            clean: true,
        },
        performance: {
            hints: 'warning', // or 'error' or false to disable
            maxAssetSize: 250000000, // in bytes
            maxEntrypointSize: 400000,
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'assets/images/[name].[ext]', // Измените путь и формат по необходимости
                                outputPath: 'assets/images', // Папка, в которую будут выводиться изображения
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [new HtmlWebpackPlugin({
            template: './index.html',

        }),
            new CopyPlugin({
                patterns: [
                    { from: "src", to: "src" },
                    { from: "assets", to: "assets" },
                ],
            }),
        ],

    };

}
