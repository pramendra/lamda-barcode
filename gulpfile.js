const gulp = require('gulp');
var webpack = require('webpack-stream');

// const webpack = require('webpack');
const zip = require('gulp-zip');
const webpackConfig = require('./webpack.config');
const devServer = require('webpack-dev-server');

const s3 = require('gulp-s3-upload')({
  accessKeyId:"AKIAJTKN54ZVBT2BKSDQ",
  secretAccessKey:"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"
});


gulp.task('build', function() {
  return gulp.src('./index.js')
  .pipe(webpack( require('./webpack.config.js')))
  .pipe(gulp.dest('build/'));
});

gulp.task('zip', function () {
    return gulp.src('./build/index.js')
        .pipe(zip('test.zip'))
        .pipe(gulp.dest('./distribution'));
});

gulp.task("upload", function() {
  gulp.src("./distribution/**")
    .pipe(s3({
      Bucket:'ean-barcode',
      ACL:'public-read'
    }))
    .on('end', function(){ console.log('uploading started'); })

  ;
});

gulp.task('deploy', function(){
  gulp.watch('./distribution/**',['build', 'zip', 'upload']);
});


gulp.task('watch', function(){
  gulp.watch('./distribution/**',['upload']);
});
