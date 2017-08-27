const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    externals: {
        jquery: 'window.$'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders:['babel-loader','eslint-loader'],
            // use: [{
            //   loader: 'babel-loader',
            //   options: {
            //     presets: ['env',"es2015", "react", "stage-3"],
            //     plugins:["transform-class-properties"]
            //   }
            // },{
            //     loader:"eslint-loader"
            // }]
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                    includePaths: ["node_modules"]
                }
            }]
        }, {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'eslint-loader',
                query: {
                    configFile: './.eslintrc'
                },
            }],
        }]
    }
}