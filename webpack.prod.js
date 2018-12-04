// 去除无用的引入，压缩代码
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        // new UglifyJSPlugin()
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
});