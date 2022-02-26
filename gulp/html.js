let path = require('./path/path.js')
let fileinclude = require('gulp-file-include')

module.exports = function() {
  $.gulp.task('html:build', () => {
    return $.gulp.src([path.path.src.html, path.path.src.php])
      .pipe($.plugins.plumber())
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe($.gulp.dest(path.path.build.root))
      .on('end', $.browserSync.reload)
  })
}