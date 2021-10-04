module.exports = () =>{
    $.gulp.task('watch', () =>{
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/static/scss/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('src/static/fonts/**/*', $.gulp.series('fonts'));
        $.gulp.watch('src/static/img/**/*');
        $.gulp.watch('src/static/js/**/*', $.gulp.series('scripts'));
        $.gulp.watch('src/static/localisation/**/*', $.gulp.series('localisation'));
    })
}