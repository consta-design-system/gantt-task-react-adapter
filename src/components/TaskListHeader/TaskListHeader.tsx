import './TaskListHeader.css';

import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

const cnTaskListHeader = cn('TaskListHeader');

export const TaskListHeader = () => {
  return (
    <div className={cnTaskListHeader()}>
      <Text
        className={cnTaskListHeader('Label')}
        size="xs"
        lineHeight="m"
        weight="bold"
        align="left"
        transform="uppercase"
      >
        Этапы проекта
      </Text>
      <Text
        className={cnTaskListHeader('Label')}
        size="xs"
        lineHeight="m"
        weight="bold"
        align="left"
        transform="uppercase"
      >
        Начало
      </Text>
      <Text
        className={cnTaskListHeader('Label')}
        size="xs"
        lineHeight="m"
        weight="bold"
        align="left"
        transform="uppercase"
      >
        Окончание
      </Text>
    </div>
  );
};
