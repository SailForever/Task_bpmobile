import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import concat from 'gulp-concat';

export const js=()=>{
  return app.gulp.src(app.path.src.js)
    .pipe(concat('app.js'))
    .pipe(app.gulp.dest(app.path.build.js)) // выгружаем не сжатый дубль скрипта
    .pipe(uglify())
    .pipe(rename({
      extname: ".min.js"
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}