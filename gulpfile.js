var gulp = require('gulp');

gulp.task('html', function() {
  return gulp.src('front/index.html')
        .pipe(gulp.dest('public'));
});

gulp.task('js', function() {
  return gulp.src('front/javascripts/app.js')
        .pipe(gulp.dest('public'));
});

gulp.task('css', function() {
  return gulp.src('front/stylesheets/app.css')
        .pipe(gulp.dest('public'));
});

gulp.task('images', function() {
  return gulp.src('front/images/*')
        .pipe(gulp.dest('public/assets/images'));
});

gulp.task('default', ['html', 'js', 'css', 'images']);
