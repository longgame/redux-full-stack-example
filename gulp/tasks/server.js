'use strict';

var gulp = require('gulp');
var server = require('gulp-express');
var runSequence = require('run-sequence');

gulp.task('server', function() {
  server.run(['./server.js']);
  gulp.watch(['app.js', 'src/**/*', 'config/**/*'], server.notify);
});

gulp.task('serve', function() {
  runSequence(['server']);
});
