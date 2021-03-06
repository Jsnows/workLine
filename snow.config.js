module.exports = {
	// 配置入口（应用入口）
	app: [
		'detail'
	],
	// dll
	dll: [
		'./node_modules/vue/dist/vue.esm.js',
		'./node_modules/es6-promise/dist/es6-promise.auto.js',
		'vuex',
		'zepto'
	],
	// 别名
	alias: {
		'element-ui-css':'./node_modules/element-ui/lib/theme-default/',
		'static': './static',
		'components': './components'
	},
	// webpack loaders
	loaders: [

	],
	// 输出目录的名称
	outputName: 'output',
	// 是否压缩
	zip: true,
	// 是否启用热更新
	hot: false,
	// webpack打包分析
	analyzer: false,
}