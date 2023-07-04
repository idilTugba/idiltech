
var gulp = require('gulp'); // npm install --save-dev gulp
    // npm init
    sass = require('gulp-sass'); // npm install --save-dev gulp-sass
    imagemin = require('gulp-imagemin'); // npm install --save-dev gulp-imagemin
    watch = require('gulp-watch'); // npm install --save-dev gulp-watch
    cleanCSS = require('gulp-clean-css'); // npm install --save-dev gulp-clean-css
    uglify = require('gulp-uglify'); // npm install --save-dev gulp-uglify
    concat = require('gulp-concat'); // npm install --save-dev gulp-concat
    pump = require('pump'); // npm install pump
    htmlmin = require('gulp-htmlmin'); // npm install --save-dev gulp-htmlmin
    browserSync = require('browser-sync').create(); // npm install browser-sync gulp --save-dev

    
//npm install pump gulp-sass gulp-concat gulp-uglify gulp-clean-css gulp-imagemin gulp-minify gulp-htmlmin gulp-watch browser-sync gulp

gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch(['img/*.jpg', 'img/*.png'], ['imagemin']);
  gulp.watch('js/*.js', ['compress']);
  gulp.watch('css/style.css', ['minify-css']);
  gulp.watch("dist/css/style.css", ['ref-watch']);
  gulp.watch('*.html', ['minify', 'ref-watch']);
  gulp.watch("dist/js/all.js", ['ref-watch']);
});




gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

//REFRESH
gulp.task('serve', function() {

    browserSync.init({
        server: "./"  
    });

    gulp.watch("*.html").on('change', browserSync.reload); //üstünde çalışılan html yazılabilir
});

gulp.task('ref-watch', function (done) {
    browserSync.reload();
    done();
});


//SASS
gulp.task('sass', function(){
  gulp.src('sass/style.scss')
  .pipe(sass({debug: true}))
  .on('error', onError)
  .pipe(gulp.dest("css/"))
});


//IMAGEMIN
gulp.task('imagemin', () =>
    gulp.src('img/*')
      //.pipe(plumber({errorHandler: onerror}))
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);


//ERROR
function onError(err){
  console.log('*****HATA********');
  console.log(err.stack);
  console.log('*****HATA********');
  this.emit('end');
}

//MIN.CSS
gulp.task('minify-css', function(){
  gulp.src('css/style.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));
});


//MIN.JS
gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        concat('all.js'),
        gulp.dest('dist/js/')
    ],
    cb
  );
});


//MIN.HTML
gulp.task('minify', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('html'));
});


/**
//SPRITE
gulp.task('sprite', function generateSpritesheets () {
   var spriteData = gulp.src('img/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprites.css'
  }));
    return spriteData.img.pipe(gulp.dest('images')); // output path for the sprite
    return spriteData.css.pipe(gulp.dest('css')); // output path for the CSS
});
**/


gulp.task('default', ['sass', 'minify', 'serve', 'compress', 'minify-css', 'imagemin', 'watch']); 

//gulp