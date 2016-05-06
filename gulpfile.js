var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var gulpsync = require('gulp-sync')(gulp);
var clean = require('gulp-clean');
var imageOptim = require('gulp-imageoptim');

gulp.task('cleaning', function () {
  return gulp.src('./web/production', {
      read: false
    })
    .pipe(clean());
});

gulp.task('sass', function () {
  return gulp.src('./web/development/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./web/production/css'));
});

gulp.task('html', function () {
  return gulp.src('./web/development/html/**/*.html')
    .pipe(gulp.dest('./web/production'));
});

gulp.task('js', function () {
  return gulp.src('./web/development/js/**/*.js')
    .pipe(gulp.dest('./web/production/js'));
});

gulp.task('images', function() {
    return gulp.src('./web/development/img/**/*')
        .pipe(imageOptim.optimize())
        .pipe(gulp.dest('./web/production/img'));
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: './web/production'
    }
  });
});

gulp.task('browserSyncReload', function () {
  browserSync.reload();
});

gulp.task('sass-watch', gulpsync.sync(['sass', 'browserSyncReload']));
gulp.task('html-watch', gulpsync.sync(['html', 'browserSyncReload']));
gulp.task('js-watch', gulpsync.sync(['js', 'browserSyncReload']));
gulp.task('images-watch', gulpsync.sync(['images', 'browserSyncReload']));


gulp.task('watching', function () {
  gulp.watch('./web/development/sass/**/*.scss', ['sass-watch']);
  gulp.watch('./web/development/html/**/*.html', ['html-watch']);
  gulp.watch('./web/development/js/**/*.js', ['js-watch']);
  gulp.watch('./web/development/img/**/*', ['images-watch']);
});

gulp.task('default', gulpsync.sync(['cleaning', 'sass', 'html', 'js', 'images', 'watching', 'browserSync']));
