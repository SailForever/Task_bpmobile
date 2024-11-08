import webp from "gulp-webp";
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';

export const images=()=>{
  return app.gulp.src(app.path.src.images, { encoding: false })
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.images, { encoding: false }))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(imagemin([
      gifsicle({interlaced: true}), 
      mozjpeg({quality: 75, progressive: true}),
      optipng({optimizationLevel: 5}),
      svgo({
        plugins: [
          {
            name: 'removeViewBox',
            active: false
          }
        ]
      })
    ]))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream())
}