module.exports = {
    entry: "./src/main.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
};
