'use strict;'

gulp.task('mocha', false, shell.task([
  'NODE_ENV=test gulp db:migrate',
  'NODE_ENV=test mocha --harmony test/**/*.spec.js'
]));
