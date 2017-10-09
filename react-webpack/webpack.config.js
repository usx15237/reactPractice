const webpack = require('webpack');

module.exports = {
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新(热加载)
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/, //importjs或jsx文件时不必加后缀
                use: {
                    loader: "babel-loader" //使用針對js/jsx的"babel-loader"
                },
                exclude: /node_modules/  //mode_moudle中的模快不進行處理
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true //允许引用css文件作为模块
                        }
                    }
                ]
            }
        ]
    },
      plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
};