const path = require("path")
const fs = require("fs")
const webpack = require("webpack")

module.exports = {
    entry: path.resolve(__dirname, "app/index.js"),
    output: {
        filename: "bundle.js",
        publicPath: "/static/"
    },
    module: {
        loaders: [{
            test: /\.js$|\.jsx$/,
            exclude: /node_modules/,
            loaders: ["babel"],
            presets: [
                "es2015", "react", "stage-0"
            ]
        }, {
            test: /\.png$|\.jpg$|\.jpeg$/,
            loaders: ["url-loader"]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            PRODUCTION: false,
            BROWSER: true
        })
    ],
    resolve: {
        modulesDirectories: [
            'src',
            'node_modules'
        ],
        extensions: ['', '.json', '.js', '.jsx']
    }
}
