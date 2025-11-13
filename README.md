ДЗ - 1
Зарегистрироваться на гитхабе (если нет аккаунта) и создать публичный репозиторий для домашнего проекта - https://github.com/
Для отработки механизма проверки ДЗ, нужно создать ветку hw-1, в рамках нее создать readme файл, сделать коммит и создать пулреквест. Ссылку на пулреквест скинуть в чатик в тред по ДЗ-1. После аппрува можно мержить и подтягивать изменения в main ветку в локальный репозиторий
Скинуть логин для доступа к лекционному репозиторию
В качестве ide советую использовать vs code - https://code.visualstudio.com/. Если уже есть ide (например, webstorm), можете продолжать использовать
поставить node.js - https://nodejs.org/en
Крэш курс по гиту - https://www.youtube.com/playlist?list=PLDyvV36pndZEgSRzWGuXFrTRUFuAAMciE

ДЗ - 2
поставить расширение prettier https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode и форматировать свой код. В vs code можно настроить прогон на сохранения файла
создать ветку для ДЗ - hw-2
создать проект с помощью vite - https://vitejs.dev/guide/#scaffolding-your-first-vite-project (можете использовать любой пакетный менеджер)
почистить проект и установить зависимости
скопировать к себе моковые данные из этого проекта (materials/mock.js)
Отобразить все рестораны из моковых данных (импортируем константу в main.jsx и используем данные). Отображаем рестораны друг за другом.
Название ресторана
Заголовок - Меню (h3)
Список названий блюд (используем тег ul и li)
Заголовок - Отзывы (h3)
Список текстов отзывов (используем тег ul и li)
сделать коммит и запушить
открыть ПР из ветки с ДЗ в основную ветку
отправить ссылку на ПР в ветку ДЗ-2

ДЗ - 3
установить расширение eslint - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint и поправить конфиг в соответствии с лекционным проектом (нужно еще добавить зависимость eslint-plugin-react)
добавить в eslint правило "react/prop-types": 0. https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-proptypes-and-defaultprops
установить react расширение для браузера - https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
разбить приложение на компоненты
необходимо в блюдо добавить счетчик. Минимальное значение 0, максимальное 5, по умолчанию 0. Кнопки +-
реализовать компонент лейаута с хедером, футером и обернуть приложение
добавить условный рендеринг, где могут отсутствовать данные
Реализовать табы - кнопки с названием ресторана, по одной на каждый ресторан

Кнопки отображаем между хедером и рестораном
Единовременно отображаем только 1 ресторан
По умолчанию - отображаем первый
По клику на кнопку отображаем соответствующий ей ресторан. При повторном клике на активную кнопку ничего не происходит.

ДЗ - 4
сделать форму отзыва ReviewForm: имя, текст, рейтинг (от 1 до 5). Добавить кнопку “clear”, по клику на которую форма сбрасывается в изначальное состояние. Использовать хук useReducer
форма рисуется после всех отзывов о ресторане
переиспользовать компонент счетчика Counter между блюдом и отзывом. Важно, именно компонент, который отвечает за UI, логика счетчика блюда лежит отдельно. Можно создать DishCounter и в нем реализовать необходимую логику, но использовать для UI компонент Counter
реализовать scroll progress - https://www.cssscript.com/demo/scroll-progress-bar/
https://react.dev/learn/preserving-and-resetting-state прочитать статью

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
