var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var less = require('gulp-less');

var paths = {
  app: ['bower_components/angular/angular.js', 'bower_components/angular-route/angular-route.js', 'public/js/**/*.js'],
  views: 'public/views/**/*'
};

gulp.task('cleanJs', function () {
  return gulp.src(['build/js', 'build/*.js'], {read: false})
    .pipe(clean());
});

gulp.task('cleanHtml', function () {
  return gulp.src(['build/views', 'build/index.html'], {read: false})
    .pipe(clean());
});

gulp.task('cleanLess', function () {
  return gulp.src(['build/css'], {read: false})
    .pipe(clean());
});

gulp.task('js', ['cleanJs'], function () {
  return gulp.src(paths.app)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('html', ['cleanHtml'], function () {
    return gulp.src("public/**/*.html")
        .pipe(gulp.dest('build/'));
})

gulp.task('less', ['cleanLess'], function () {
  return gulp.src('public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('build/css/'));
});

gulp.task('build', ['js', 'html'])