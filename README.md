# [Дизайн-система Consta](http://consta.gazprom-neft.ru/) | useGanttTaskReactAdapter

Этот адаптер стилизует диаграмму Ганта [gantt-task-react](https://github.com/MaTeMaTuK/gantt-task-react) для [дизайн-системы Consta](https://consta.gazprom-neft.ru/).

# Как использовать

## Установите пакет

```sh
# NPM
$ npm install @consta/gantt-task-react-adapter

# Yarn
$ yarn add @consta/gantt-task-react-adapter
```

## Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](http://uikit.gizeasy.ru/?path=/docs/components-theme--playground).

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

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn, необходимые версии можно узнать в файле [package.json](./package.json) в блоке **engines**.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Сборка и старт Storybook
$ yarn start

# Сборка для production
$ yarn build

# Линтинг всех файлов
$ yarn lint

# Форматирование всех файлов prettier
$ yarn format

# Запуск юнит-тестов
$ yarn unit

# Запуск юнит-тестов, тестирование TS, линтинг файлов
$ yarn test
```

## Документация

[Посмотреть документацию и примеры](http://gantt-task-react-adapter.gizeasy.ru)

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](http://uikit.gizeasy.ru/?path=/docs/common-develop-contributors--page).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется ПАО «Газпром нефть» на условиях открытой [лицензии MIT](https://consta.gazprom-neft.ru/static/licence_mit.pdf).
