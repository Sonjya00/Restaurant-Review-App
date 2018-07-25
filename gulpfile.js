const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sass = require('gulp-sass');
//const eslint = require('gulp-eslint');

// //Fix js files
// gulp.task('eslint', () => {
//   return gulp.src(['**/*.js','!node_modules/**'])
//   .pipe(eslint())
//   .pipe(eslint.format())
//   .pipe(eslint.failAfterError());
// })

gulp.task('serve', ['sass'], () => {
	browserSync.init({
		injectChanges: true,
		port: 8000,
		ui: {
			port: 8001,
		},
		server: {
			baseDir: './app',
		},
	});
	gulp.watch('app/*.html').on('change', reload);
	gulp.watch('app/scss/*.scss', ['sass']).on('change', reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
	gulp.src('app/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream({match: 'app/css/*.css'}));
});

// gulp.task('watch', () =>{
// 	gulp.watch('app/*.html').on('change', reload);
// 	gulp.watch('app/scss/*.scss', ['sass']).on('change', reload);
// 	gulp.watch('app/js/*.js', reload);
// 	gulp.watch('app/*.js', reload);
// });

gulp.task('default', ['serve']);
