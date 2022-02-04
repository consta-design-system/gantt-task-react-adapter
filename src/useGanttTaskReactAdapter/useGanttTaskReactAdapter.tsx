import { GanttTaskReactAdapterProps } from './types'
import { useThemeVars } from '@consta/uikit/useThemeVars'
import { ViewMode } from 'gantt-task-react'
import 'gantt-task-react/dist/index.css'

const convertPixelToNumber = (value: string): number => Number(value.split('px')[0])

const getColumnWidth = (viewMode?: ViewMode) => {
  if (viewMode === ViewMode.Month) {
    return 300
  }
  if (viewMode === ViewMode.Week) {
    return 250
  }
  return 60
}

export const useGanttTaskReactAdapter = (
  props: GanttTaskReactAdapterProps
): GanttTaskReactAdapterProps => {
  const {
    viewMode,
    headerHeight,
    columnWidth,
    listCellWidth,
    rowHeight,
    ganttHeight,
    barCornerRadius,
    handleWidth,
    fontFamily,
    fontSize,
    barFill,
    barProgressColor,
    barProgressSelectedColor,
    barBackgroundColor,
    barBackgroundSelectedColor,
    projectProgressColor,
    projectProgressSelectedColor,
    projectBackgroundColor,
    projectBackgroundSelectedColor,
    milestoneBackgroundColor,
    milestoneBackgroundSelectedColor,
    arrowColor,
    arrowIndent,
    todayColor,
  } = props

  const vars = useThemeVars()

  return {
    headerHeight: headerHeight || convertPixelToNumber(vars.space['--space-3xl']),
    columnWidth: columnWidth || getColumnWidth(viewMode),
    listCellWidth,
    rowHeight: rowHeight || convertPixelToNumber(vars.space['--space-4xl']),
    ganttHeight,
    barCornerRadius: barCornerRadius || convertPixelToNumber(vars.control['--control-radius']),
    handleWidth,
    fontFamily: fontFamily || 'Segoe UI',
    fontSize: fontSize || vars.size['--size-text-m'],
    barFill: barFill || 70,
    barProgressColor: barProgressColor || vars.color.primary['--color-bg-normal'],
    barProgressSelectedColor: barProgressSelectedColor || vars.color.primary['--color-bg-success'],
    barBackgroundColor: barBackgroundColor || vars.color.primary['--color-bg-border'],
    barBackgroundSelectedColor,
    projectProgressColor: projectProgressColor || vars.color.primary['--color-bg-normal'],
    projectProgressSelectedColor:
      projectProgressSelectedColor || vars.color.primary['--color-bg-success'],
    projectBackgroundColor: projectBackgroundColor || vars.color.primary['--color-bg-tone'],
    projectBackgroundSelectedColor:
      projectBackgroundSelectedColor || vars.color.primary['--color-bg-tone'],
    milestoneBackgroundColor: milestoneBackgroundColor || vars.color.primary['--color-bg-normal'],
    milestoneBackgroundSelectedColor:
      milestoneBackgroundSelectedColor || vars.color.primary['--color-bg-success'],
    arrowColor: arrowColor || vars.color.primary['--color-control-bg-border-default'],
    arrowIndent: arrowIndent || convertPixelToNumber(vars.space['--space-3xl']),
    todayColor: todayColor || vars.color.primary['--color-bg-stripe'],
  }
}
