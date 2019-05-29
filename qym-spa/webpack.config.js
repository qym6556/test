const HtmlWebpackPlugin = require('html-webpack-plugin');
const argv = require('yargs-parser')(process.argv.slice(2));
// console.log(argv);
const merge = require('webpack-merge');
const _mode =argv.mode || "development";
const _modeflog = (_mode == "production");
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const smp = new SpeedMeasurePlugin();
const {resolve} = require('path');
const setTitle = require('node-bash-title');
setTitle('qym的server');//类似的还有 set-iterm2-badge
const loading = {
	//css-doodle   loading
	html:'加载中.....'
}
let webpackConfig = {
	module:{
		rules: [{
			test: /\.(png|jpg|gif)$/,
			use: [
			{
				loader: 'file-loader',
				options: {}
			}
			]
		},
		{
			loader: 'image-webpack-loader',
			options: {
				mozjpeg: {
					progressive: true,
					quality: 65
				},
				optipng: {
					enabled: false,
				},
				pngquant: {
					quality: '65-90',
					speed: 4
				},
				gifsicle: {
					interlaced: false,
				},
				webp: {
					quality: 75
				}
			}
		},
		{
			test: /\.(png|jpg|gif|otf|svg)$/i,
			use: [
			{
				loader: 'url-loader',
				options: {
					limit: 10*1024
				}
			}
			]
		},
		{
			test: /\.css$/,
			use: [
			{
				loader: MiniCssExtractPlugin.loader,
				// options: {
				// 	publicPath: '../'
				// }
			},
			{
				loader: 'css-loader',
				options: {
					modules: true,
					localIdentName: '[path][name]__[local]--[hash:base64:5]'
				}
			}]
		}]
	},
	// watch:!_modeflog,
	// watchOptions:{
	// 	poll:1000,//多长时间检查一次
	// 	aggregateTimeout:500,
	// 	ignored:/node_modules/
	// },
	devServer:{
		before(app){
			app.get("/api/test",(req,res) => {
				res.json({
					code:200,
					msg:"Hello 123"
				});
			});
		}
	},
	optimization:{
		minimizer:[
		],
		noEmitOnErrors:false,
		// namedChunks
		//moduleIds
		splitChunks:{
			cacheGroups:{
				commons:{
					chunks:'initial',
					name:'common',
					minChunks:2,
					maxInitialRequests:5,
					minSize:0
				}
			}
			
		},
		runtimeChunk:{
			name:'runtime'
		}
	},
	plugins: [
	new CleanWebpackPlugin(['dist']),
	new MiniCssExtractPlugin({
		filename: _modeflog ? "styles/[name].[contenthash:5].css" : "styles/[name].css",
		chunkFilename: _modeflog ? "styles/[id].[contenthash:5].css" : "styles/[id].css"
	}),
	new HtmlWebpackPlugin({
		filename:'index.html',
		template:'src/index.html',
		// template:'src/index.js',
		loading,
		minify:{
			removeComments:_modeflog,
			collapseWhitespace:_modeflog
		}
	}),
	new WebpackBuildNotifierPlugin({
		title: "webpack配置结果",
		logo: resolve("./favicon.png"),
		suppressSuccess: true
	}),
	new ProgressBarPlugin(),
	// new InlineManifestWebpackPlugin("runtime")
	]
}
module.exports = smp.wrap(merge(_mergeConfig,webpackConfig));