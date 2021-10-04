module.exports = () =>{
    $.gulp.task('fonts', () =>{
        return $.gulp.src('src/static/fonts/**/*')
            .pipe($.gulp.dest('dist/static/fonts'))
    })
}