import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

const groups = [
  {
    title: 'Компоненты',
    id: 'components',
  },
  {
    title: 'Hooks',
    id: 'hooks',
  },
] as const;

export const { createStand } = createConfig({
  title: 'Consta gantt-task-react-adapter',
  id: 'gantt-task-react-adapter',
  groups,
  group: 'Адаптеры',
  image,
  description:
    '[тут описание что это такое] Ультра топчик библиотеки с пацанскими кнопками и графиками, качай.',
});
