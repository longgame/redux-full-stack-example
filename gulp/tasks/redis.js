'use strict;'

gulp.task('redis', 'Start redis-server.', function() {
  sequence(['redis:server']);
});

gulp.task('redis:server', false, shell.task([
  'redis-server'
]));

gulp.task('redis:client', false, shell.task([
  'redis-cli'
]));
