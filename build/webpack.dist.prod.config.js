var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
var pkg = require('../package.json');

process.env.NODE_ENV = 'production';

var oTime = new Date();
var oAllTime = oTime.getFullYear() + '-' + (oTime.getMonth()+1) + '-' + oTime.getDate() + ' ' + oTime.getHours() + ':' + oTime.getMinutes() + ':' + oTime.getSeconds();

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'vue-xeditor.min.js',
        library: 'vue-xeditor.min',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        // 注入内容
        new webpack.BannerPlugin('@ name '+ pkg.name +'\n@ version '+ pkg.version +'\n@ time '+ oAllTime),
        // @todo
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});
