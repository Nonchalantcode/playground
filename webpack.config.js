const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const src = path.resolve(__dirname, 'src')

module.exports = {
	watch: process.env.MODE === 'DEVELOPMENT',
	mode: process.env.MODE === 'DEVELOPMENT' ? 'development' : 'production',
	entry: {
		'main': path.resolve(src, 'index.ts')
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist'
	},
	plugins: [
		new HtmlWebpackPlugin({ template: path.resolve(src, 'index.html'), minify: false, inject: 'body' }),
		new MiniCssExtractPlugin(),
		new CleanWebpackPlugin({ verbose: false })
	],
	module: {
		rules: [
			{
				test: /\.s?css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: '/node_modules/'
			},
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
}