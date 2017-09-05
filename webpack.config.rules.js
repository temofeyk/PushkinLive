let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function() {
    return [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: 'file-loader?name=fonts/[hash].[ext]'
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: 'file-loader?name=images/[hash].[ext]'
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader'
            })
        },
        {
            test: /\.hbs/,
            loader: 'handlebars-loader'
        },
    ];
};