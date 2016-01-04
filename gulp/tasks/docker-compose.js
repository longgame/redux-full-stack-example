'use strict;'

gulp.task('docker:compose:help', 'List docker-compose commands.', function() {
  // FIXME
});

gulp.task('docker:compose', false, function() {
  sequence(['docker:compose:help']);
});

gulp.task('docker:compose:build', false, function() {
  // FIXME
});

gulp.task('docker:compose:start', false, function() {
  // FIXME
});

gulp.task('docker:compose:stop', false, function() {
  // FIXME
});

gulp.task('docker:compose:rm', false, function() {
  // FIXME
});
