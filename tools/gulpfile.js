'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat-util');
var gulpinject = require('gulp-inject');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');
var del = require('del');

// Paths are stored in gulp.config.js
var config = require('./gulp.config')();
var paths = config.paths,
  jsSourceFiles = config.jsSourceFiles,
  jsLibs = config.jsLibs,
  plugins = config.plugins,
  jsFiles = config.jsFiles,
  scssSourceFiles = config.scssSourceFiles,
  scssFiles = config.scssFiles,
  cssFiles = config.cssFiles,
  partials = config.partials;


gulp.task('js', function () {
  return gulp
    .src(jsSourceFiles, { base: paths.src })
    .pipe(gulp.dest(paths.dist));
});


gulp.task('css', function () {
  return gulp
    .src(scssSourceFiles, { base: paths.src })
    .pipe(sass())
    .pipe(gulp.dest(paths.dist));
});


gulp.task('html', function () {
  return gulp
    .src(partials, { base: paths.src })
    .pipe(gulp.dest(paths.dist));
});


gulp.task('lib', function () {
  return gulp
    .src(paths.src + 'lib/**')
    .pipe(gulp.dest(paths.dist + 'lib/'));
});


gulp.task('index:copy', function () {
  return gulp
    .src(paths.src + 'index.html')
    .pipe(gulp.dest(paths.dist));
});


gulp.task('index:inject', [ 'index:copy' ], function () {
  var sources = gulp.src(
    [ paths.dist + 'config.js' ]
    .concat(jsLibs)
    .concat(plugins)
    .concat(jsFiles)
    .concat(cssFiles), { read: false });

  return gulp
    .src(paths.dist + 'index.html')
    .pipe(gulpinject(sources, { relative: true }))
    .pipe(concat.header())
    .pipe(gulp.dest(paths.dist));
});


gulp.task('watch', function () {
  gulp.watch(jsSourceFiles, { interval: 1000, usePoll: true }, [ 'js' ]);
  gulp.watch(scssFiles, [ 'css' ]);
  gulp.watch(partials, { interval: 1000, usePoll: true }, [ 'html' ]);
  gulp.watch(paths.src + 'index.html', [ 'index:inject' ]);
});


gulp.task('lint', function () {
  return gulp
    .src([
      paths.src + '**/*.js',
      '!' + paths.src + 'lib/**/*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


gulp.task('clean', function (next) {
  del(paths.dist + '**/*', { force: true }, next);
});


gulp.task('default', function (next) {
  runSequence(
    'lint',
    'js',
    'css',
    'html',
    'lib',
    'index:inject',
    next
  );
});
