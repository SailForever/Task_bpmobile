// модуль
import gulp from "gulp";
// пути
import { path } from "./gulp/config/path.js";
// общие плагины
import { plugins } from "./gulp/config/plugins.js";

// передаем значения в глобальную переменную
global.app={
  path: path,
  gulp: gulp,
  plugins: plugins
}

// импорт задач
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { lang } from "./gulp/tasks/lang.js";

// наблюдатель за изменениями в файлах
function watcher(){
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

// основные задачи
const mainTasks=gulp.series(lang, gulp.parallel(html, scss, js, images));

// построение сценариев выполнения задач
const dev=gulp.series(reset, mainTasks,gulp.parallel(watcher, server));

// выполнение сценария по умолчанию
gulp.task('default', dev);