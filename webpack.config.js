module.exports = {
    context: __dirname,
    entry: './shared/browser.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map'
};