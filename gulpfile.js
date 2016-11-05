
'use strict'

// INCLUDE GULP MODULES
var gulp = require('gulp'),
    prefixer  = require('gulp-autoprefixer'),
    cleanCSS  = require('gulp-clean-css'),
    importCSS = require('gulp-import-css'),
    uglify    = require('gulp-uglify'),
    rigger    = require('gulp-rigger')

var paths = {
  build : {
    html : 'build/',
    js   : 'build/js',
    css  : 'build/css',
  },
  src : {
    html       : 'src/index.html',
    js         : 'src/js/main.js',
    css        : 'src/css/main.css'
  }
}

// GULP DEFAULT TASK
gulp.task('build', [
  'js:build',
  'style:build',
  'html:build'
]);


// BUILD JS
gulp.task('js:build', () => {
  gulp.src(paths.src.js)
    .pipe(rigger())
    .pipe(uglify())
    .pipe(gulp.dest(paths.build.js));
});

// BUILD CSS
gulp.task('style:build', () => {
  gulp.src(paths.src.css)
    .pipe(importCSS())
    .pipe(prefixer())
    .pipe(cleanCSS({compatibility: 'ie10'}))
    .pipe(gulp.dest(paths.build.css));
});

// BUILD HTML
gulp.task('html:build', function () {
  gulp.src(paths.src.html)
    .pipe(gulp.dest(paths.build.html));
});
