var gulp  = require('gulp');
var shell = require('gulp-shell');

/*
 Run our static site generator to build the pages
*/
gulp.task('generate', shell.task('eleventy'));

