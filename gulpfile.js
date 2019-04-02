var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefixer = require('gulp-autoprefixer'),
    gcmq = require('gulp-group-css-media-queries');

gulp.task('sass', function () {
    return gulp.src('./assets/style/scss/*.scss')
        .pipe(sass())
        .pipe(prefixer())
        .pipe(gcmq())
        .pipe(gulp.dest('./assets/style/css'))
})