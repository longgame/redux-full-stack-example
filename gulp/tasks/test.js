'use strict;'

gulp.task('test', 'Run unit tests.', function() {
  sequence([ 'mocha' ]);
});
