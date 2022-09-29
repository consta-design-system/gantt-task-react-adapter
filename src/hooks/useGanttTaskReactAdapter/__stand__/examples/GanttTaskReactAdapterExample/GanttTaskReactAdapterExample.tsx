import { Gantt } from 'gantt-task-react';
import React from 'react';

import { data } from '##/hooks/useGanttTaskReactAdapter/__mock__/mock.data';
import { useGanttTaskReactAdapter } from '##/hooks/useGanttTaskReactAdapter/useGanttTaskReactAdapter';

export const GanttTaskReactAdapterExample = () => {
  const styleOptions = useGanttTaskReactAdapter({});

  return <Gantt tasks={data} {...styleOptions} />;
};
