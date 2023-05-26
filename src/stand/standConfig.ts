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
  repositoryUrl:
    'https://github.com/consta-design-system/gantt-task-react-adapter',
  figmaUrl:
    'https://www.figma.com/file/LKYyjgQ3khFHvXraZAG1n1/Consta-Components?type=design&node-id=445-29188&t=DKeTFCEKhSmLPtik-0',
});
