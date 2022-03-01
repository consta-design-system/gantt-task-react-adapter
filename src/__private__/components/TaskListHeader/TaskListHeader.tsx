import React from 'react'
import { Text } from '@consta/uikit/Text'
import { cn } from '@/__private__/utils/bem'

import './TaskListHeader.css'

const cnTaskListHeader = cn('TaskListHeader')

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
  )
}
