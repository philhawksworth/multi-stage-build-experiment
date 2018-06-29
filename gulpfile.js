var gulp  = require('gulp');


/**
  Our gulp tasks live in their own files,
  for the sake of clarity.
 */
require('require-dir')('./gulp-tasks');


/*
  Let's gwt the data we need and then build this sucker.
*/
gulp.task('build', gulp.series(
  'test:stage'
  // 'generate'
));
