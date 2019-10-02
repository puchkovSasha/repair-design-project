var gulp = require('gulp'),
    sass= require('gulp-sass'),
    browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
 
gulp.task('sass', function(){
	return gulp.src('src/sass/*.sass')    
		.pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 8 versions'],
            cascade: false
        }))
    .pipe(concatCss('main.css'))
    .pipe(gulp.dest('src/css'))
    // .pipe(browserSync.reload({stream: true}))
    ;
});
gulp.task('html', function(){
    return gulp.src('src/*.html')
    // .pipe(browserSync.reload({stream: true}))
    ;
});
gulp.task('js', function(){
    return gulp.src('src/js/*.js')
    // .pipe(browserSync.reload({stream: true}))
    ;
});

/* gulp.task('browser-sync', function(){
	   browserSync( {
	   	server: {
	   		baseDir: 'src'
	   	},
	   	notify: false
	   });
}); */

gulp.task('watch', function(){
	 gulp.watch('src/sass/*.sass', gulp.parallel('sass'));
	 gulp.watch('src/*.html', gulp.parallel('html'));
     gulp.watch('src/js/*.js', gulp.parallel('js'));
});

// если нужен browser-sync, добавте в отслеживание и раскоментируйте строки.

gulp.task('default', gulp.parallel('sass','watch'));