## React TODO List (Firebase Realtime Database)

Небольшое приложение‑список дел на React 18 с синхронизацией через Firebase Realtime Database (модульный SDK v9).

### Возможности
- Добавление, редактирование и удаление задач
- Онлайн‑синхронизация в реальном времени
- Поиск и сортировка
- Адаптивная верстка и улучшенные стили

### Требования
- Node.js 18+
- Проект Firebase с включённой Realtime Database

### Установка
1. Установите зависимости:
   ```bash
   npm install
   ```
2. В консоли Firebase создайте Realtime Database. Запомните регион и `databaseURL`.

3. Обновите файл `src/firebase.js` своим конфигом. Важно: `databaseURL` должен соответствовать региону вашей БД.


### Скрипты
- `npm start` — запуск dev‑сервера на `http://localhost:3000`
- `npm run build` — сборка в папку `build/`

### Деплой на Firebase Hosting
1. Соберите приложение: `npm run build`
2. Убедитесь, что в `firebase.json` поле `public` указывает на `build` (учитывайте регистр)
3. Выполните деплой: `firebase deploy --only hosting`

