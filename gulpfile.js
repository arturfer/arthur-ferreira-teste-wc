const gulp = require('gulp');

var cssMinify = require('gulp-css-minify');
const rename = require('gulp-rename');

gulp.task('minifyCss', function () {
    return gulp.src('./css/**/*.css')
      .pipe(cssMinify())
      .pipe(gulp.dest('./public/css'))
      .pipe(rename(function(path){
        path.basename += ".min";
        path.extname = ".css"
      }))
      
  });

gulp.task('default', function(){
    console.log('iniciado')
})