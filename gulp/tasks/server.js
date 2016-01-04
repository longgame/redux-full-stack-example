'use strict';

var nodemon = require('gulp-nodemon');

gulp.task('server', 'Start server on port 3000.', function() {
  nodemon({
    script: path.join(app.get('root'), 'server.js'),
    ext: 'js json html ejs jade',
    watch: ['server.js', 'app.js', 'src/**/*', 'config/**/*'],
    env: { NODE_ENV: 'development' }
  });
}, {
  aliases: [ 'serve' ]
});
