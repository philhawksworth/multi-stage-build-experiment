var gulp  = require('gulp');
var shell = require('gulp-shell');
const simpleGit = require('simple-git')('../');

/*
 Run our static site generator to build the pages
*/
gulp.task('test:stage', shell.task('eleventy'));




gulp.task('test:stage', function() {
  simpleGit.branch(function(b){
    console.log(`{b}`);
  })
});
