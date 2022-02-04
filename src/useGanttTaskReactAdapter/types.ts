import { ViewMode, StylingOption } from 'gantt-task-react'

export const ganttTaskReactAdapterPropView = [
  ViewMode.Day,
  ViewMode.HalfDay,
  ViewMode.Month,
  ViewMode.QuarterDay,
  ViewMode.Week,
] as const
export type GanttTaskReactAdapterPropView = typeof ganttTaskReactAdapterPropView[number]
export const ganttTaskReactAdapterPropViewDefault: GanttTaskReactAdapterPropView =
  ganttTaskReactAdapterPropView[0]

// Так как мы пока ничего не выкладываем и я не знаю как будет
// выглядеть дизайн я решил вырезать кастомные элементы
export type GanttTaskReactAdapterProps = Omit<
  StylingOption,
  'TooltipContent' | 'TaskListHeader' | 'TaskListTable'
> & {
  viewMode?: ViewMode
}
