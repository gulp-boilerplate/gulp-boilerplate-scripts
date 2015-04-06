var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    order = require('gulp-order'),
    print = require('gulp-print');

module.exports = function (config) {
    return function(){
        return gulp.src(config.src)
                .on('error', gutil.log.bind(gutil, 'SCRIPTS ERROR:'))
                .pipe(order(config.src, {base:'./'}))
                .pipe(print())
                .pipe(concat('main.js'))
                .pipe(uglify())
                .pipe(gulp.dest(config.dest));
    };
};
