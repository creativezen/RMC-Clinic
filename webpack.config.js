const path = require('path')

module.exports = {
	entry: './src/base/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
        test: /\.css$/i,
        use: [
					'style-loader',
					'css-loader'
				],
      }
		]
	},
	externals: {
		jquery: 'jQuery'
	},
	devtool: 'source-map'
}
