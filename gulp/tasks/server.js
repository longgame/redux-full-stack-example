'use strict';

gulp.task('server', 'Start server on port 3000.', function() {
  sequence(['nodemon']);
}, {
  aliases: [ 'serve' ]
});
