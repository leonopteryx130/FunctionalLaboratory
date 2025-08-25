const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')
const path = require('path')
const webpack = require('webpack')

module.exports = merge(commonConfig, {
    mode: "development",
    output: {
        publicPath: "/"
    },
    devServer: {
        compress: true, // 启动Gzip
        port: 3500, // 端口
        open: true, // 自动打开浏览器
            // 从目录提供静态文件的选项（默认是 'public' 文件夹）
        static: path.resolve(process.cwd(), "./public"),
        // 启用 webpack 的 热模块替换 特性
        hot: true,
        // 监听文件变化
        watchFiles: "src/**/*",
        // 当使用HTML5 History API时，index.html页面可能要代替404响应。
        // 解决了使用react-router-dom 使用 BrowserRouter 模式时，在
        // 浏览器输入路由地址是会请求接口报错的问题
        historyApiFallback: true, 
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})
