import { StylingOption } from 'gantt-task-react'

// Так как мы пока ничего не выкладываем и я не знаю как будет
// выглядеть дизайн я решил вырезать кастомные элементы
export type GanttTaskReactAdapterProps = Omit<
  StylingOption,
  'TooltipContent' | 'TaskListHeader' | 'TaskListTable'
>
