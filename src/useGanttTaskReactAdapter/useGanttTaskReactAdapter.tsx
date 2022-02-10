import { GanttTaskReactAdapterProps } from './types'
import { useThemeVars } from '@consta/uikit/useThemeVars'
import 'gantt-task-react/dist/index.css'

const convertPixelToNumber = (value: string): number => Number(value.split('px')[0])

export const useGanttTaskReactAdapter = (): GanttTaskReactAdapterProps => {
  const vars = useThemeVars()

  return {
    headerHeight: convertPixelToNumber(vars.space['--space-3xl']),
    rowHeight: convertPixelToNumber(vars.space['--space-4xl']),
    barCornerRadius: convertPixelToNumber(vars.control['--control-radius']),
    fontFamily: 'Segoe UI',
    fontSize: vars.size['--size-text-m'],
    barFill: 70,
    barProgressColor: vars.color.primary['--color-bg-normal'],
    barProgressSelectedColor: vars.color.primary['--color-bg-success'],
    barBackgroundColor: vars.color.primary['--color-bg-border'],
    barBackgroundSelectedColor: vars.color.primary['--color-bg-border'],
    projectProgressColor: vars.color.primary['--color-bg-normal'],
    projectProgressSelectedColor: vars.color.primary['--color-bg-success'],
    projectBackgroundColor: vars.color.primary['--color-bg-tone'],
    projectBackgroundSelectedColor: vars.color.primary['--color-bg-tone'],
    milestoneBackgroundColor: vars.color.primary['--color-bg-normal'],
    milestoneBackgroundSelectedColor: vars.color.primary['--color-bg-success'],
    arrowColor: vars.color.primary['--color-control-bg-border-default'],
    arrowIndent: convertPixelToNumber(vars.space['--space-3xl']),
    todayColor: vars.color.primary['--color-bg-stripe'],
  }
}
