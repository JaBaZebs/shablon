const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: ["@babel/polyfill" ,"./public/index.jsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    devServer:{
        port:3000,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/"),
        }
    },
    plugins:[
        new htmlWebpackPlugin({template: "./public/index.html"}),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.(css|less)$/,
                use:["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg|ico)/,
                use:["file-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
        
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
        
            }
        ]
    }
}