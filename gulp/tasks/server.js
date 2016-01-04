'use strict';

var nodemon = require('gulp-nodemon');

gulp.task('server', function() {
  nodemon({
    script: path.join(app.get('root'), 'server.js'),
    ext: 'js json html ejs jade',
    watch: ['server.js', 'app.js', 'src/**/*', 'config/**/*'],
    env: { NODE_ENV: 'development' }
  });
});

gulp.task('serve', function() {
  sequence(['server']);
});
