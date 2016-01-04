'use strict;'

gulp.task('docker:help', 'List docker commands.', function() {
  // FIXME
}, {
  aliases: ['docker:app:help']
});

gulp.task('docker', false, function() {
  sequence(['docker:help']);
}, {
  aliases: ['docker:app']
});

gulp.task('docker:app:build', false, function() {
  // FIXME
});

gulp.task('docker:app:push', false, function() {
  // FIXME
});

gulp.task('docker:app:start', false, function() {
  // FIXME
});

gulp.task('docker:app:stop', false, function() {
  // FIXME
});

gulp.task('docker:app:rm', false, function() {
  // FIXME
});
