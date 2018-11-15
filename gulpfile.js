const gulp = require("gulp");
const sass = require("gulp-sass");
const minify = require("gulp-csso");
const rename = require("gulp-rename");
const wait = require('gulp-wait');

gulp.task('css-minified', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(wait(1500))
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'));
});

gulp.task('css', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(wait(1500))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function () {
    gulp.watch(["src/scss/**/*.scss", "src/js/**/*.js"], ["css-minified", "css", "js"]);
})

gulp.task('build', ["css", "js", "css-minified"]);
gulp.task("default", ["watch"]);