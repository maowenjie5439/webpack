
// console.log(window) // 报错，window is not defined
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.js"
    },
    mode: "development"
}