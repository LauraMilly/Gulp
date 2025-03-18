const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css'); 

const paths = {
    sass: './src/sass/**/*.scss',  
    js: './src/js/**/*.js',        
    images: './src/images/**/*',  
    dist: {
        css: './dist/css',          
        js: './dist/js',           
        images: './dist/images'     
    }
};

function compileSass() {
    return gulp
        .src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.dist.css)); 
}

function minifyJS() {
    return gulp
        .src(paths.js) 
        .pipe(uglify()) 
        .pipe(gulp.dest(paths.dist.js)); 
}

function compressImages() {
    return gulp.src(paths.images)  
        .pipe(imagemin())  
        .pipe(gulp.dest(paths.dist.images));  
}



gulp.task('sass', compileSass);
gulp.task('minify-js', minifyJS);
gulp.task('images', compressImages);
gulp.task('default', gulp.series('sass', 'images', 'minify-js'));

