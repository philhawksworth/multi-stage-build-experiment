var gulp  = require('gulp');
var shell = require('gulp-shell');
// // const simpleGit = require('simple-git')('../');

// /*
//  Run our static site generator to build the pages
// */
gulp.task('test:stage', shell.task('git branch'));




// gulp.task('test:stage', function() {
//   // simpleGit.branch(function(b){
//   //   console.log(`{b}`);
//   // })


//   require('simple-git')(__dirname + '/../')
//   .pull()
//   .tags((err, tags) => console.log("Latest available tag: %s", tags.latest));

// // update repo and when there are changes, restart the app
// // require('simple-git')()
// //   .pull((err, update) => {
// //      if(update && update.summary.changes) {
// //         require('child_process').exec('npm restart');
// //      }
// //   });


// });


