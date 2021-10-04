module.exports = () => {
    $.gulp.task('pug', () =>{
        return $.gulp.src('src/pug/*.pug')
            .pipe($.glp.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('dist'))
            .on('end', $.browserSync.reload);
    })
}