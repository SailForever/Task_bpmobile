import copy  from 'gulp-copy';

export const lang = () => {
  return app.gulp.src(app.path.src.lang)
    .pipe(copy(app.path.build.lang, { prefix: 3 }));
};