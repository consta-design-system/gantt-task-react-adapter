import React from 'react'
import { Gantt } from 'gantt-task-react'
import { data } from '@/__private__/hooks/useGanttTaskReactAdapter/__mock__/mock.data'
import { useGanttTaskReactAdapter } from '@/__private__/hooks/useGanttTaskReactAdapter/useGanttTaskReactAdapter'

export const GanttTaskReactAdapterExample = () => {
  const styleOptions = useGanttTaskReactAdapter({})

  return <Gantt tasks={data} {...styleOptions} />
}
