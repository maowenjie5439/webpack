const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "scripts/[name].[chunkhash:5].js",
    },
    module: {
        rules: [
            {
                test: /\.(png)|(gif)|(jpg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            // limit: false //不限制任何大小，所有经过loader的文件进行base64编码返回
                            limit: 10 * 1024, //只要文件不超过 100*1024 字节，则使用base64编码，否则，交给file-loader进行处理
                            name: "imgs/[name].[hash:5].[ext]",
                        },
                    },
                ],
            },
            // {
            //     test: /\.(png)|(gif)|(jpg)$/,
            //     use: [
            //         {
            //             loader: "file-loader",
            //             // name: 文件名
            //             // hash： 文件内容的hash，不是webpack所有资源的hash，此时还没有到编译阶段，还在loader阶段，不可能是webpack资源的hash
            //             // ext： 文件扩展名
            //             options: {
            //                 name: "[name].[hash:5].[ext]",
            //             },
            //         },
            //     ],
            // },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    devServer: {
        open: true,
    },
    stats: {
        modules: false,
        colors: true,
    },
};
