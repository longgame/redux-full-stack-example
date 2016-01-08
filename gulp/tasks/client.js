'use strict;'

gulp.task('client:build', false,  function() {
  sequence(['webpack']);
});

gulp.task('client:serve', false,  function() {
  sequence(['webpack:devserver']);
});

gulp.task('client', 'Serve client on port 9000.',  function() {
  sequence(['client:serve']);
}, {
  aliases: [ 'dev' ]
});
