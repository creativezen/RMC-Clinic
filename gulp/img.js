const path = require('./path/path.js')
const imagemin = require('gulp-imagemin')

module.exports = function () {
	$.gulp.task('img:build', () => {
		return $.gulp.src([path.path.src.img])
			.pipe($.plugins.changed(path.path.build.img))
			.pipe($.plugins.plumber())
			.pipe($.plugins.imagemin({
				verbose: true,
			}))
			// .pipe($.plugins.webp()) // Options WebP: https://github.com/imagemin/imagemin-webp#imageminwebpoptions
			.pipe($.gulp.dest(path.path.build.img))
	})
}