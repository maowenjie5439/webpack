var path = require("path")

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js", //属性名：chunk的名称， 属性值：入口模块（启动模块）
        a: ["./src/a.js", "./src/index.js"] //启动模块有两个
    },
    output: {
        path: path.resolve(__dirname, "target"), //必须配置一个绝对路径，表示资源放置的文件夹，默认是dist
        // filename: "[id].[chunkhash:5].js" //配置的合并的js文件的规则
        filename: "[name].[chunkhash:4].js"
    },
    devtool: "source-map"
}

// 动态规则：[name]、[id]、[hash]、[chunkhash]、[contenthash]
// [name]：chunk的名称
// [id]：chunk的编号
// [hash]：根据文件内容计算出的hash值
// [chunkhash]：根据chunk内容计算出的hash值
// [chunkhash:4]：根据chunk内容计算出的hash值，长度为4
// [contenthash]：根据文件内容计算出的hash值