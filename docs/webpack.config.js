const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./docs/src/index.tsx",
    output: {
        path: __dirname + "/dist",
    },
    devServer: {
        contentBase: __dirname + "/dist",
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    resolve: { extensions: [".js", ".ts", ".tsx"] },
    plugins: [
        new HtmlWebpackPlugin({
            title: "React Common UI Components API Documentation",
        }),
    ],
};
