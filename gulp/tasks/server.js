'use strict';

var path = require('path');
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var runSequence = require('run-sequence');

gulp.task('server', function() {
  nodemon({
    script: path.join(app.get('root'), 'server.js'),
    ext: 'js html ejs jade',
    watch: ['server.js', 'app.js', 'src/**/*', 'config/**/*'],
    env: { NODE_ENV: 'development' }
  });
});

gulp.task('serve', function() {
  runSequence(['server']);
});
