var gulp = require('gulp');
	watch = require('gulp-watch');
	sass = require('gulp-sass');
	cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
//var browserSync = require('browser-sync').create();
//npm install gulp-sass gulp-concat gulp-uglify gulp-clean-css gulp-imagemin gulp-minify gulp-watch --save-dev

/**gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "C:/Users/golcuki/Desktop/deneme2/index.html"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("index.html").on('change', browserSync.reload);
});**/ 

gulp.task('imagemin', () => {
	//return gulp.src('img/*/*')
	return gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
});


gulp.task('sass', function(){
	gulp.src('sass/style.scss')
	.pipe(sass({debug: true}))
	.on('error', onError)
	.pipe(gulp.dest("css/"))
	//.pipe(browserSync.stream());
});
 

function onError(err){
	console.log('*****HATA********');
	console.log(err.stack);
	console.log('*****HATA********');
	this.emit('end');
}

gulp.task('minify-css', function(){
	gulp.src('css/style.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('compress', function() {
  gulp.src('js/*.js')
    .pipe(minify({
        ext:{
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('dist/js'))
});




gulp.task('scripts',function(){
	gulp.src('js/main.js')
	.pipe(uglify({debug: true}))
	.on('error', onError)
	.pipe(concat('scripts.js'))
});


gulp.task('watch', function() {
	gulp.watch('sass/*.scss', ['sass']);
	gulp.watch('js/*.js', ['compress']);
	gulp.watch('css/style.css', ['minify-css']);
});



gulp.task('default', ['sass', 'minify-css', 'compress', 'imagemin' , 'scripts', 'watch' ]); 