const gulp = require('gulp');
const browserSync = require('browser-sync').create();
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

// gulp.task('watch', () =>{
//   gulp.watch('src/*.html', ['copyHtml']);
//   gulp.watch('src/img/*', ['imagemin']);
// });

gulp.task('default', ['browser-sync']);
