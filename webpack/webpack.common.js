const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        path: path.resolve(process.cwd(), "src/index")
    },
    output: {
        filename: 'static/js/index.js',
        path: path.resolve(process.cwd(), "dist"),
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
        modules: ['src', 'node_modules'] // Assuming that your files are inside the src dir
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react",
                    ],
                },
            }],
        },]
    },
    plugins:[
        //webpack-dev-serve开启的时候也需要配置，因此这个插件在开发和打包时候都需要用到
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }), 
    ],
}