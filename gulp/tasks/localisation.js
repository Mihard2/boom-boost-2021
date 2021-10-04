module.exports = () => {
    $.gulp.task('localisation', () => {
        return $.gulp.src('src/static/localisation/**/*')
            .pipe($.gulp.dest('dist/static/localisation'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    })
}