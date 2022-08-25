import './TooltipContent.css';

import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { Task } from 'gantt-task-react';
import React from 'react';

import { cn } from '../../utils/bem';

type Props = {
  task: Task;
  fontSize: string;
  fontFamily: string;
};

const getDaysBetween = (start: Date, end: Date) => {
  return (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
};

const prependZero = (val: string | number) => `0${val}`.slice(-2);

const getDaysPostfix = (days: number) => {
  const cell = days % 10;
  if ((cell > 4 && cell < 10) || (days > 9 && days < 21)) {
    return 'дней';
  }
  if (cell > 1 && cell < 5) {
    return 'дня';
  }
  return 'день';
};

const convertDateToString = (date: Date) =>
  `${prependZero(date.getDate())}.${prependZero(
    date.getMonth() + 1,
  )}.${date.getFullYear()}`;

const cnToolripContent = cn('TooltipContent');

export const TooltipContent = (props: Props) => {
  const { task } = props;
  const { id, name, type, start, end, progress, project } = task;
  const days = Math.round(getDaysBetween(start, end));
  return (
    <Card
      verticalSpace="s"
      horizontalSpace="m"
      id={id}
      className={cnToolripContent()}
    >
      {type === 'task' && project && (
        <Text size="2xs" view="secondary">
          Проект: {project}
        </Text>
      )}
      <Text size="m" weight="bold">
        {name}
      </Text>
      {type !== 'milestone' ? (
        <>
          <Text size="s">
            Продолжительность: {`${days} ${getDaysPostfix(days)}`}
          </Text>
          <Text size="s">Прогресс: {progress}%</Text>
        </>
      ) : (
        <Text size="s">Дата: {convertDateToString(end)}</Text>
      )}
    </Card>
  );
};
