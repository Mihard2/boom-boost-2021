module.exports = () => {
    $.gulp.task('clean', () => del.sync('dist'))
}