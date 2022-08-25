import { StylingOption } from 'gantt-task-react';

export const ganttTaskReactAdapterPropSize = ['m', 's', 'l'] as const;
export type GanttTaskReactAdapterPropSize =
  typeof ganttTaskReactAdapterPropSize[number];
export const ganttTaskReactAdapterPropSizeDefault =
  ganttTaskReactAdapterPropSize[0];

export type GanttTaskReactAdapter = (props: {
  size?: GanttTaskReactAdapterPropSize;
}) => Omit<
  StylingOption,
  'TooltipContent' | 'TaskListHeader' | 'TaskListTable'
> & {
  prefix?: string;
};
