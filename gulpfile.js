'use strict';

const {
  series,
  src,
  dest
} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
  return src('./projects/ng-element-ui/ng-element-ui.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./dist/ng-element-ui'));
}

function copyfont() {
  return src('./node_modules/element-theme-chalk/src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./dist/ng-element-ui/fonts'));
}

exports.build = series(compile, copyfont);
