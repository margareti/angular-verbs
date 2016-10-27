'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('gulp-connect');

gulp.task('style', function() {
	gulp.src('./app/sass/style.scss')
	.pipe(plumber())
	.pipe(sass())
	.pipe(postcss([
		autoprefixer({
			browsers: [
	    "last 1 version",
	    "last 2 Chrome versions",
	    "last 2 Firefox versions",
	    "last 2 Opera versions",
	    "last 2 Edge versions"
	  	]})
		]))
	.pipe(gulp.dest('./app/css'))
	.pipe(server.reload())
})

gulp.task('watch', function() {
	gulp.watch('./app/sass/*', ['style']);
	gulp.watch('./app/*.html', ['html']);
})

gulp.task('html', function() {
	gulp.src('./app/*.html')
	.pipe(server.reload())
})


gulp.task('connect', ['style', 'watch'], function() {
	server.server({
		livereload: true
	})
})

gulp.task('default', [
	'connect'
])
