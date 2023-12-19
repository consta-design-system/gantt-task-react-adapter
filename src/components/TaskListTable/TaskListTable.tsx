import './TaskListTable.css';

import { IconArrowDown } from '@consta/icons/IconArrowDown';
import { Text } from '@consta/uikit/Text';
import { Task } from 'gantt-task-react';
import React from 'react';

import { cn } from '##/utils/bem';

type Props = {
  rowHeight?: number;
  rowWidth?: string;
  fontFamily?: string;
  fontSize?: string;
  locale?: string;
  tasks: Task[];
  selectedTaskId?: string;
  setSelectedTask?: (taskId: string) => void;
  onExpanderClick?: (task: Task) => void;
};

const cnTaskListTable = cn('TaskListTable');

const getWeekDay = (date: Date) => {
  const day = date.getDay();
  switch (day) {
    case 1:
      return 'Пн';
    case 2:
      return 'Вт';
    case 3:
      return 'Ср';
    case 4:
      return 'Чт';
    case 5:
      return 'Пт';
    case 6:
      return 'Сб';
    case 7:
      return 'Вс';
    default:
      return 'Пн';
  }
};

const getRuMonth = (date: Date) => {
  const month = date.getMonth();
  switch (month) {
    case 0:
      return 'января';
    case 1:
      return 'февраля';
    case 2:
      return 'марта';
    case 3:
      return 'апреля';
    case 4:
      return 'мая';
    case 5:
      return 'июня';
    case 6:
      return 'июля';
    case 7:
      return 'августа';
    case 8:
      return 'сентября';
    case 9:
      return 'октября';
    case 10:
      return 'ноября';
    case 11:
      return 'декабря';
    default:
      return 'января';
  }
};

const convertDate = (date: Date) =>
  `${getWeekDay(date)}, ${date.getDate()} ${getRuMonth(date)}`;

export const TaskListTable = (props: Props) => {
  const {
    rowHeight,
    rowWidth,
    tasks,
    selectedTaskId,
    setSelectedTask,
    onExpanderClick,
  } = props;

  return (
    <div className={cnTaskListTable()}>
      {tasks.map((task, index) => {
        const { end, start, name, hideChildren, id, isDisabled } = task;

        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            className={cnTaskListTable('Row', {
              selected: selectedTaskId === id,
              disabled: isDisabled,
            })}
            key={cnTaskListTable(`Row-${index}`)}
            style={{
              ['--row-height' as string]: `${rowHeight}px`,
              ['--row-width' as string]: `${rowWidth}px`,
            }}
            onClick={() => setSelectedTask?.(id)}
          >
            <div
              className={cnTaskListTable('Cell', {
                withotChildren: typeof hideChildren !== 'boolean',
              })}
            >
              {typeof hideChildren === 'boolean' && (
                <button
                  className={cnTaskListTable('Button', { hide: hideChildren })}
                  type="button"
                  onClick={() => onExpanderClick?.(task)}
                >
                  <IconArrowDown size="xs" />
                </button>
              )}
              <Text size="s" lineHeight="m" view="primary">
                {name}
              </Text>
            </div>
            <Text
              className={cnTaskListTable('Cell')}
              size="s"
              lineHeight="m"
              view="primary"
            >
              {convertDate(start)}
            </Text>
            <Text
              className={cnTaskListTable('Cell')}
              size="s"
              lineHeight="m"
              view="primary"
            >
              {convertDate(end)}
            </Text>
          </div>
        );
      })}
    </div>
  );
};
