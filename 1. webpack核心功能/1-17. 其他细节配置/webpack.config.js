var path = require("path")
module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        index: "./src/index.js"
    },
    // externals: {
    //     jquery: "$",
    //     lodash: "_"
    // },
    // stats: {
    //     colors: true,
    //     modules: false,
    //     hash: false,
    //     builtAt: false
    // }
    // output: {
    //     path: path.resolve(__dirname, "dist"),
    //     filename: "[name].[chunkhash:4].js"
    // }
}
