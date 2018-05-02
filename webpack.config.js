var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: {
        app: ['./example/main.js']
    },
    output: {
        path: path.resolve(__dirname, './test'),
        publicPath: '/test/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ['es2015']
                    ]
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "/test"),
        compress: false,
        port: 9000
    },
    performance: {
        hints: false
    },
    // devtool: '#eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            //favicon:'./src/img/favicon.ico', //favicon路径
            filename: 'index.html', //生成的html存放路径，相对于 path
            template: './example/index.html', //html模板路径
            inject: true, //允许插件修改哪些内容，包括head与body
            hash: true, //为静态资源生成hash值
            minify: { //压缩HTML文件
                removeComments: false, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        })

    ]
}

if (process.env && process.env.NODE_ENV === 'production') {
    // module.exports.devtool = '#source-map'

    module.exports.plugins = (module.exports.plugins || []).concat([

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
