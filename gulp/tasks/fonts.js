import copy  from 'gulp-copy';// без этого плагина повреждаются шрифты

export const fonts = () => {
  return app.gulp.src(app.path.src.fonts)
    .pipe(copy(app.path.build.fonts, { prefix: 3 }));
};