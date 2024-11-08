import {deleteAsync} from 'del';

export const reset = async () => {
  try {
    console.log('Удаляем директорию:', app.path.clean); // Выводим для отладки
    await deleteAsync(app.path.clean);
    console.log('Удаление завершено!');
  } catch (error) {
    console.error('Ошибка при удалении:', error);
  }
};