const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sass = require('gulp-sass');

// BrowserSync
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

gulp.task('default', ['serve']);
