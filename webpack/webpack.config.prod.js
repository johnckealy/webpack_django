const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(baseConfig, {

    output: {
        path: path.resolve('../blog/static/blog/compiled_assets/'),
        filename: "[name]-[hash].js"
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "style-[hash].css"
        })
    ],

    mode: 'production'
});