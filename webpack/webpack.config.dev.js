const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const path = require('path');
// const webpack = require('webpack');
// const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = merge(baseConfig, {
    output: {
      path: path.resolve('../blog/static/blog/compiled_assets/'),
      filename: "[name].js"
    },
    
    plugins: [
      new MiniCssExtractPlugin({
          filename: "style.css"
      })
    ],

    mode: 'development'
});