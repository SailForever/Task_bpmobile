import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';

const sass=gulpSass(dartSass);

export const scss=()=>{
  return app.gulp.src(app.path.src.scss, {sourcemaps: true})
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(webpcss(
      {
        webpClass:".webp",
        noWebpClass: ".no-webp"
      }
    ))
    .pipe(autoprefixer({
      grid: true,
      OverconstrainedError: ["last 10 versions"],
      cascade: true
    }))
    .pipe(app.gulp.dest(app.path.build.css)) // выгружаем не сжатый дубль стилей
    .pipe(cleanCss())
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}