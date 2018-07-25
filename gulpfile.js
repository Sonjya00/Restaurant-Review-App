const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
//const eslint = require('gulp-eslint');

// //Fix js files
// gulp.task('eslint', () => {
//   return gulp.src(['**/*.js','!node_modules/**'])
//   .pipe(eslint())
//   .pipe(eslint.format())
//   .pipe(eslint.failAfterError());
// })

gulp.task('browser-sync', () => {
	browserSync.init({
		port: 8000,
		ui: {
			port: 8001,
		},
		server: {
			baseDir: './app',
		},
	});
});

gulp.task('watch', () =>{
	gulp.watch('app/*.html', reload);
	gulp.watch('app/css/*.css', reload);
	gulp.watch('app/js/*.js', reload);
	gulp.watch('app/*.js', reload);
});

gulp.task('default', ['watch', 'browser-sync']);
