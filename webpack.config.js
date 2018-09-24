const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    entry: 'app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(s)?css$/,
                loader: 'null-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    externals: [nodeExternals()]
};