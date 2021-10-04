module.exports = () =>{
    $.gulp.task('sass', () =>{
        return $.gulp.src('src/static/scss/*.scss')
            .pipe($.glp.sourcemaps.init())
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.glp.autoprefixer('last 10 versions'))
            .pipe($.glp.sourcemaps.write())
            .pipe($.gulp.dest('dist/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    })
}