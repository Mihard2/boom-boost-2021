module.exports = () =>{
    $.gulp.task('image', () =>{
        return $.gulp.src('src/static/img/**/*')
            .pipe($.gulp.dest('dist/static/img'));
    })
}