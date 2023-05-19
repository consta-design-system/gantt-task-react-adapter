# [Дизайн-система Consta](http://consta.design/) | gantt-task-react-adapter

Этот адаптер стилизует диаграмму Ганта [gantt-task-react](https://github.com/MaTeMaTuK/gantt-task-react) для [дизайн-системы Consta](https://consta.design/).

# Как использовать

## Установите пакет

```sh
# NPM
$ npm install @consta/gantt-task-react-adapter
# Yarn
$ yarn add @consta/gantt-task-react-adapter
```

## Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](https://portal.consta.design/libs/portal/theme-themeabout).

### Можно использовать компоненты

Например, так:

```js
import React from 'react'
import { Theme, presetGpnDefault } from '@consta/uikit/Theme'
import { Gantt, Task } from 'gantt-task-react'
import { useGanttTaskReactAdapter } from '@consta/gantt-task-react-adapter/useGanttTaskReactAdapter'
const data: Task[] = [
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    name: 'Some Project',
    id: 'ProjectSample',
    progress: 25,
    type: 'project',
    hideChildren: false,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2, 12, 28),
    name: 'Idea',
    id: 'Task 0',
    progress: 45,
    type: 'task',
    project: 'ProjectSample',
  },
  ...
]
const App = () => {
  const styleOptions = useGanttTaskReactAdapter()
  return <Gantt {...styleOptions} tasks={data} />
}
```

## Документация

[Посмотреть документацию и примеры](http://consta.design/libs/gantt-task-react-adapter)

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Запуск локального сервера для разработки
$ yarn start

# Сборка пакета
$ yarn build

# Сборка стенда
$ yarn stand:build

# Запуск тестов
$ yarn test
```

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta.design/libs/portal/contributers-code).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется на условиях открытой [лицензии MIT](https://consta.design/static/licence_mit.pdf).
