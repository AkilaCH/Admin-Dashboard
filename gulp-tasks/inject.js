'use strict'
var gulp = require('gulp');
var injectPartials = require('gulp-inject-partials');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var prettify = require('gulp-prettify');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');




gulp.task('inject', function () {
    runSequence('injectPartial', 'injectAssets', 'html-beautify', 'replacePath');
});




gulp.task('injectPartial', function () {
    return gulp.src(["./src/**/*.html", "!./dist/**/*.html", "!./node_modules/**/*.html"], {
            base: "./"
        })
        .pipe(injectPartials())
        .pipe(gulp.dest("."));
});



gulp.task('injectAssets', function () {
    return gulp.src('./**/*.html')
        .pipe(inject(gulp.src(['./assets/vendors/js/core.js', './assets/vendors/iconfonts/mdi/css/materialdesignicons.css'], {
            read: false
        }), {
            name: 'plugins',
            relative: true
        }))
        .pipe(inject(gulp.src(['./assets/css/*.css', './assets/js/template.js'], {
            read: false
        }), {
            relative: true
        }))
        .pipe(gulp.dest('.'));
});




gulp.task('replacePath', function () {
    gulp.src('src/*/*.html', {
            base: "./"
        })
        .pipe(replace('src="assets/images/', 'src="../assets/images/'))
        .pipe(replace('href="pages/', 'href="pages/'))
        .pipe(replace('href="demo_1/', 'href="../Dashboard/'))
        .pipe(replace('href="index.html"', 'href="index.html"'))
        .pipe(gulp.dest('.'));

    gulp.src('src/*/pages/*.html', {
            base: "./"
        })
        .pipe(replace('src="assets/images/', 'src="../../assets/images/'))
        .pipe(replace('href="pages/', 'href="../pages/'))
        .pipe(replace('href="demo_1/', 'href="../Dashboard/'))
        .pipe(replace('href="index.html"', 'href="../index.html"'))
        .pipe(gulp.dest('.'));

    gulp.src('src/*/pages/*/*.html', {
            base: "./"
        })
        .pipe(replace('src="assets/images/', 'src="../../../assets/images/'))
        .pipe(replace('href="pages/', 'href="../../pages/'))
        .pipe(replace('href="demo_1/', 'href="../Dashboard/'))
        .pipe(replace('href="index.html"', 'href="../../index.html"'))
        .pipe(gulp.dest('.'));
});



gulp.task('html-beautify', function () {
    return gulp.src('./src/**/*.html')
        .pipe(prettify({
            unformatted: ['pre', 'code', 'textarea']
        }))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
});