'use strict;'

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('development', function() {
  runSequence(['webpack:devserver']);
});

gulp.task('dev', function() {
  runSequence(['development']);
});
