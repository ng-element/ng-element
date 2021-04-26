'use strict';

// 编译css
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

exports.buildDemoCmp = series(clearDemoComponent, demoComponentPath);
exports.build = series(compile, copyfont);

// 编译demo到assets
const watch = require('gulp-watch');
const rename = require('gulp-rename');
const clean = require('gulp-clean');

function clearDemoComponent() {
  return src(['./src/assets/codes/'], {
      read: false
    })
    .pipe(clean());
}

function demoComponentPath() {
  return src(['./projects/ng-element-ui/*/demo/*.component.ts'])
    .pipe(rename(function (path) {
      return {
        dirname: '',
        basename: path.basename,
        extname: ''
      };
    }))
    .pipe(dest('./src/assets/codes/'));
}

function monitorDemoComponent() {
  return watch(['./projects/ng-element-ui/*/demo/*.component.ts'], function (file) {
    const source = file.history[0];
    const path = source.slice(source.lastIndexOf('\\') + 1);
    copyDemoComponent(source, path);
  });
}

function copyDemoComponent(source, path) {
  const name = path.slice(0, path.lastIndexOf('.'));
  return src(source, {
      allowEmpty: true
    })
    .pipe(rename(name))
    .pipe(dest('./src/assets/codes/'));
}

exports.serve = series(clearDemoComponent, demoComponentPath, monitorDemoComponent);
