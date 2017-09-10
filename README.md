Проект собран с помощью утилиты Create-react-app.

Для запуска приложения на webpack:
npm start

Для генерации файлов для «production»
npm run build

Проект использует зависимости:
"dependencies": {
    "axios": "^0.16.2",
    "bootstrap": "^4.0.0-alpha.6",
    "react": "^15.6.1",
    "react-addons-css-transition-group": "^15.6.0",
    "react-addons-transition-group": "^15.6.0",
    "react-dom": "^15.6.1",
    "react-redux": "^5.0.6",
    "react-transition-group": "^2.2.0",
    "reactstrap": "^4.8.0",
    "redux": "^3.7.2",
    "redux-thunk": "^2.2.0"
  }

Структура проекта:
Index.js – скрипт входа
App.js – стартовый скрипт приложения, здесь импортируются зависимости библиотеки redux
Components – директория компонентов приложения
Actions – директория  содержит функции для изменения состояния приложения
Reducers - директория  содержит  редюсеры выполняющие изменения состояния

Приложение состоит из 4 компонентов:
UserList - список пользователей
EducationList - список видов образования
CityList - список городов
GridContainer - таблица
