const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./docs/src/index.ts",
    output: {
        path: __dirname + "/dist",
    },
    devServer: {
        contentBase: __dirname + "/dist",
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "React Common UI Components API Documentation",
        }),
    ],
};
