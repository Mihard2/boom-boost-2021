"use strict";

global.$ = {
  gulp: require("gulp"),
  glp: require("gulp-load-plugins")(),
  importJs: require("gulp-js-import-file"),
  babel: require("gulp-babel"),
  sass: require("gulp-sass")(require("sass")),
  browserSync: require("browser-sync").create(),
  del: require("del"),

  path: {
    tasks: require("./gulp/config/tasks.js"),
  },
};

$.path.tasks.forEach((taskPath) => {
  require(taskPath)();
});

$.gulp.task(
  "default",
  $.gulp.series(
    $.gulp.parallel("pug", "sass", "scripts", "localisation", "fonts", "image"),
    $.gulp.parallel("watch", "browser-sync")
  )
);

$.gulp.task("clean", (done) => {
  $.del.sync("dist");
  done();
});
