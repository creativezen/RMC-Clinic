let path = require('./path/path.js')

module.exports = function () {
	$.gulp.task('watch', () => {
		// Without critical
		$.gulp.watch(path.path.watch.html, { usePolling: true }, $.gulp.series('html:build'))
		$.gulp.watch(path.path.watch.php, { usePolling: true }, $.gulp.series('php:build'))

		// If ftp
		if ($.yargs.ftp) {
			const ftp = 'ftp:build'
			$.gulp.watch(path.path.watch.style, { usePolling: true }, $.gulp.series('style:build', ftp))
			$.gulp.watch(path.path.src.js, { usePolling: true }, $.gulp.series('js:build', ftp))
			$.gulp.watch([path.path.src.img, '!src/images/icons/**/*'], { usePolling: true }, $.gulp.parallel('img:build', ftp))
			$.gulp.watch(path.path.src.imgComp, { usePolling: true }, $.gulp.parallel('img:build', ftp))
			$.gulp.watch(path.path.src.resources, $.gulp.series('resources:build', ftp))
		} else {
			$.gulp.watch(path.path.watch.style, { usePolling: true }, $.gulp.series('style:build'))
			$.gulp.watch(path.path.src.js, { usePolling: true }, $.gulp.series('js:build'))
			$.gulp.watch([path.path.src.img, '!src/images/icons/**/*'], { usePolling: true }, $.gulp.series('img:build'))
			$.gulp.watch(path.path.src.resources, $.gulp.series('resources:build'))
		}
	})

	// Critical
	// $.gulp.watch(path.path.watch.json, {usePolling: true}, $.gulp.series('pug:build', 'critical:build'));
	// $.gulp.watch(path.path.watch.pug, {usePolling: true}, $.gulp.series('pug:build', 'critical:build'));
	// eslint-disable-next-line max-len
	// $.gulp.watch(path.path.watch.style, {usePolling: true}, $.gulp.series('style:build', 'pug:build', 'critical:build'));
}