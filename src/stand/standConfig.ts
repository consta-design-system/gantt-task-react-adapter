import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta gantt-task-react-adapter',
  id: 'gantt-task-react-adapter',
  groups: [
    {
      title: 'Документация',
      id: 'docs',
      initialOpen: true,
    },
    {
      title: 'Hooks',
      id: 'hooks',
      view: 'card',
      initialOpen: true,
    },
  ],
  group: 'Адаптеры',
  image,
  description:
    'Адптер для диаграммы Ганта из библиотеки gantt-task-react. Стилизует диаграмму для дизайн-системы Consta.',
});
