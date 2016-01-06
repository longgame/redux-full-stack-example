'use strict;'

var mocha = require('gulp-mocha');

gulp.task('mocha', false, () => {
  gulp.src(
      path.join(app.get('root'), 'test/**/*.spec.js')
  )
    .pipe(mocha({
    }))
    .once('end', () => {
      process.exit();
    });
});
