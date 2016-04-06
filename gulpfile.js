'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var rimraf = require('gulp-rimraf');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('default', ['js', 'css', 'watch']);
gulp.task('watch', ['watch:js', 'watch:css']);

gulp.task('js', ['clean:js'], function() {
  //input files
  return gulp.src('client/js/**/*.js')
    .pipe(plumber())
    .pipe(ngAnnotate())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});
//watch js for changes
gulp.task('watch:js', function() {
  return gulp.watch('client/js/**/*.js', ['js']);
});
//clean (delete) all temp files in public
gulp.task('clean:js', function() {
  return gulp.src('public/js', {read: false})
  .pipe(rimraf());
});
//CSS
gulp.task('css', function() {
  return gulp.src(['client/scss/**/*.scss', 'client/sass/**/*.sass'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
  })

gulp.task('watch:css', function() {
  return gulp.src(['client/scss/**/*.scss', 'client/scss/**/*.sass'], ['css'])
})
gulp.task('clean:css', function() {
  return gulp.src('public/css', {read: false})
    .pipe(rimraf());
});


// gulp.task //define a new task
// gulp.src //"source" - read/input files
// ().pipe() // pipe our code thru functions
// gulp.dest // "destination" - write/output files
// gulp.watch// watch files for changes and run tasks
