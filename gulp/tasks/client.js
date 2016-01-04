'use strict;'

gulp.task('client:build', false,  function() {
  runSequence(['webpack']);
});

gulp.task('client:serve', false,  function() {
  runSequence(['webpack:devserver']);
});

gulp.task('client', 'Serve client on port 9000.',  function() {
  runSequence(['client:serve']);
}, {
  aliases: [ 'dev' ]
});
