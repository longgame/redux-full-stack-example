'use strict;'

gulp.task('docker:help', 'List docker commands.', function() {
  // FIXME
});

gulp.task('docker', false, function() {
  sequence(['docker:help']);
});

gulp.task('docker:build', false, function() {
  // FIXME
});

gulp.task('docker:start', false, function() {
  // FIXME
});

gulp.task('docker:stop', false, function() {
  // FIXME
});

gulp.task('docker:rm', false, function() {
  // FIXME
});
