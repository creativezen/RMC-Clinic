let path = require('./path/path.js')

module.exports = function() {
  $.gulp.task('php:build', () => {
    return $.gulp.src([path.path.src.php])
      .pipe($.plugins.plumber())
      .pipe($.gulp.dest(path.path.build.root))
      .on('end', $.browserSync.reload)
  })
}