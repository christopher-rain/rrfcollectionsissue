var webpack = require("webpack");
const { resolve } = require("path");

module.exports = env => {
    return {
        entry: "./js/src/index.js",
        output: {
            path: resolve(__dirname, "web/js"),
            filename: "bundle.js",
            publicPath: "/web/js/"
        },
        devtool: env.prod ? "source-map" : "eval",
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: resolve(__dirname, "js/src"),
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        }
    };
};
