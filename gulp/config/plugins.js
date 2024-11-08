import replace from "gulp-replace"; // поиск и замена
import browsersync from "browser-sync" // локальный сервер
import newer from "gulp-newer"; //проверка изображений которых еще нет в папку с результатом

// экспортируем объект
export const plugins={
  replace: replace,
  browsersync: browsersync,
  newer: newer
}