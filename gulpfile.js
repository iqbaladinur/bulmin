const gulp = require("gulp");
const sass = require("gulp-sass");
const minify = require("gulp-csso");
const concat = require("gulp-concat");
const sourcemaps = require('gulp-sourcemaps');
const wait = require('gulp-wait');
gulp.task('css', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(wait(1500))
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(gulp.dest('build/css'));
});

gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bulmin.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function () {
    gulp.watch(["src/scss/**/*.scss", "src/js/**/*.js"], ["css", "js"]);
})

gulp.task("default", ["watch"]);