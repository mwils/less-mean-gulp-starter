var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var less = require('gulp-less');
var server = require( 'gulp-develop-server' );
var livereload = require('gulp-livereload');
 
// run server 
gulp.task( 'server:start', function() {
    server.listen( { path: 'server.js' } );
});
 
// restart server if app.js changed 
gulp.task( 'server:restart', function() {
    gulp.watch( [ 'server/**/*.js' ], server.restart );
});

gulp.task('server:run', ['server:start', 'server:restart']);

var paths = {
  vendors: ['bower_components/angular/angular.js', 'bower_components/angular-route/angular-route.js'],
  app: ['public/js/**/*.js'],
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

gulp.task('app', ['cleanJs'], function () {
  return gulp.src(paths.app)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('vendor', ['cleanJs'], function () {
  return gulp.src(paths.vendors)
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('build/js'));
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

gulp.task('reload', [], function () {
  console.log("Sending reload signal to Chrome");
  livereload.reload();
})

gulp.task('build', ['app', 'vendor', 'less', 'html'], function () {
});

gulp.task('run', ['build', 'server:run'], function () {
  livereload.listen();
  gulp.watch('public/js/**/*.js', ['app', 'vendor', 'reload']);
  gulp.watch('public/less/**/*.less', ['less', 'reload']);
  gulp.watch('public/views/**/*', ['html', 'reload']);
});

