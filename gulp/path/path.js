module.exports = {
	path: {
		build: { // Build files
			root: 'dist/',
			style: 'dist/css',
			img: 'dist/images',
			imgFavicons: 'dist/images/favicons',
			js: 'dist/js',
			fonts: 'dist/fonts',
			zip: 'zip'
		},
		src: { // Source files
			html: 'src/*.html',
			php: 'src/*.php',
			style: 'src/base/sass/main.scss',
			img: 'src/images/**/*.{png,jpg,jpeg,gif,svg}',
			js: 'src/**/*.js',
			fonts: 'src/fonts/*',
			favicon_lg: 'src/images/favicon-lg.png',
			favicon_sm: 'src/images/favicon-sm.png',
			resources: 'src/resources/**/*'
		},
		watch: { // Watch files
			json: 'src/base/data/*.json',
			html: 'src/**/*.html',
			img: 'src/images/**/*.{png,jpg,jpeg,gif,svg}',
			php: 'src/**/*.php',
			style: 'src/**/*.+(sass|scss|css)'
		},
		clean: {
			all: './dist'
		}
	}
}
