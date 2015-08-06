var gulp = require('gulp'),
  jshint = require('gulp-jshint');



gulp.task('lint', function(){
  return  gulp
    .src(['./public/app/**/*.js', './app.js', './controller/*.js', './models/*.js', './middlewares/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});