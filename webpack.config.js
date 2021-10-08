const path = require('path');
const WebPack = require('webpack');

module.exports = {
    // 入口js tip: 按喜好更改
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'dist.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 37.5,
                            remPrecision: 8
                        }
                    }
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 37.5,
                            remPrecision: 8
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new WebPack.ProvidePlugin({
            '$': 'jquery',
            jQuery: 'jquery'
        })
    ],
    // 服务器配置 文档: https://github.com/webpack/webpack-dev-server
    devServer: {
        static: {
            directory: path.join(__dirname, './dist')
        },
        // 是否自动打开浏览器
        open: false,
        compress: true,
        // 端口号
        port: 3000,
        // 服务器白名单列表
        // allowedHosts: [],
        // 是否开启热更新
        hot: true,
        // 代理地址
        proxy: {
        },
        client: {
            logging: 'info',
            overlay: true,
            progress: true
        },
        watchFiles: ['src/*']
    }
}