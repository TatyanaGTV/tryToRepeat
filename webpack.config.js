const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/gameprocess.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: "./index.html"
        }
    ),
        new CopyPlugin({
            patterns: [
                { from: "src", to: "src" },
                { from: "icons", to: "icons" },
                { from: "images", to: "images" },
            ],
        }),

    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

};