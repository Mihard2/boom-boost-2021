module.exports = () => {
  $.gulp.task("scripts", () => {
    return $.gulp
      .src("src/static/js/main.js")
      .pipe(
        $.importJs({
          hideConsole: true,
          importStack: true,
        })
      )
      .pipe(
        $.babel({
          presets: ["@babel/preset-env"],
        })
      )
      .pipe($.gulp.dest("dist/static/js"))
      .pipe(
        $.browserSync.reload({
          stream: true,
        })
      );
  });
};
