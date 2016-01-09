'use strict';

var nodemon = require('gulp-nodemon');

gulp.task('nodemon', false, function() {
  nodemon({
    script: path.join(app.get('root'), 'server.js'),
    ext: 'js json html ejs jade',
    watch: ['server.js', 'app.js', 'src/**/*', 'config/**/*'],
    ignore: ['src/client/**/*'],
    nodeArgs: ['--harmony'],
    env: { NODE_ENV: 'development' },
  });
});
