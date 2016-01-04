'use strict;'

gulp.task('build', 'Build assets for server.', function() {
  sequence(['client:build']);
});
