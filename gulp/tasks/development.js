'use strict;'

gulp.task('development', function() {
  runSequence(['webpack:devserver']);
});

gulp.task('dev', function() {
  runSequence(['development']);
});
