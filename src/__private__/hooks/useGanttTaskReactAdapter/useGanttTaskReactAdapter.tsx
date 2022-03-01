import {
  GanttTaskReactAdapter,
  GanttTaskReactAdapterPropSize,
  ganttTaskReactAdapterPropSizeDefault,
} from './types'
import { useThemeVars } from '@consta/uikit/useThemeVars'
import 'gantt-task-react/dist/index.css'
import { getByMap } from '@consta/uikit/__internal__/src/utils/getByMap'
import './UseGanttTaskReactAdapter.css'
import { cn } from '@/__private__/utils/bem'

const convertPixelToNumber = (value: string): number => Number(value.split('px')[0])

const sizeRowMap: Record<GanttTaskReactAdapterPropSize, 'l' | 'xl' | '2xl'> = {
  s: 'l',
  m: 'xl',
  l: '2xl',
}

const cnUseGanttTaskReactAdapter = cn('UseGanttTaskReactAdapter')

export const useGanttTaskReactAdapter: GanttTaskReactAdapter = props => {
  const { size = ganttTaskReactAdapterPropSizeDefault } = props
  const vars = useThemeVars()

  const rowHeight = convertPixelToNumber(
    vars.space[`--space-${getByMap(sizeRowMap, size)}` as keyof typeof vars.space]
  )

  return {
    headerHeight: 58,
    rowHeight: rowHeight + 12,
    barCornerRadius: convertPixelToNumber(vars.control['--control-radius']),
    fontFamily: 'Segoe UI',
    locale: 'RU',
    fontSize: vars.size['--size-text-m'],
    barFill: (rowHeight / (rowHeight + 12)) * 100,
    barProgressColor: '#90DDFF',
    barProgressSelectedColor: '#71CDF5',
    barBackgroundColor: vars.color.primary['--color-bg-system'],
    barBackgroundSelectedColor: vars.color.primary['--color-bg-system'],
    projectProgressColor: '#D2E058',
    projectProgressSelectedColor: '#D2E058',
    projectBackgroundColor: vars.color.primary['--color-bg-caution'],
    projectBackgroundSelectedColor: '#FFBD59',
    milestoneBackgroundColor: vars.color.primary['--color-bg-caution'],
    milestoneBackgroundSelectedColor: '#FFBD59',
    arrowColor: vars.color.primary['--color-bg-border'],
    arrowIndent: convertPixelToNumber(vars.space['--space-m']),
    todayColor: vars.color.primary['--color-bg-stripe'],
    prefix: cnUseGanttTaskReactAdapter({ size }),
    columnWidth: 120,
  }
}
