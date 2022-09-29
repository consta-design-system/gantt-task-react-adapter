import './useGanttTaskReactAdapterVariants.css';

import { useSelect } from '@consta/stand';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import React from 'react';

import { TaskListHeader } from '##/components/TaskListHeader';
import { TaskListTable } from '##/components/TaskListTable';
import { TooltipContent } from '##/components/TooltipContent';
import { cn } from '##/utils/bem';

import { data } from '../__mock__/mock.data';
import {
  ganttTaskReactAdapterPropSize,
  ganttTaskReactAdapterPropSizeDefault,
} from '../types';
import { useGanttTaskReactAdapter } from '../useGanttTaskReactAdapter';

const getStartEndDateForProject = (tasks: Task[], projectId: string) => {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let { start } = projectTasks[0];
  let { end } = projectTasks[0];

  projectTasks.forEach((task) => {
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  });

  return [start, end];
};

const cnGanttTaskReactAdapterVariants = cn('GanttTaskReactAdapterVariants');

const Variants = () => {
  const viewMode = useSelect(
    'viewMode',
    [
      ViewMode.Day,
      ViewMode.HalfDay,
      ViewMode.Month,
      ViewMode.QuarterDay,
      ViewMode.Week,
    ],
    ViewMode.Day,
  );
  const size = useSelect(
    'size',
    ganttTaskReactAdapterPropSize,
    ganttTaskReactAdapterPropSizeDefault,
  );

  const [tasks, setTasks] = React.useState<Task[]>(data);

  const { prefix, ...styleOptions } = useGanttTaskReactAdapter({ size });

  const handleTaskChange = (task: Task) => {
    let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project =
        newTasks[newTasks.findIndex((t) => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map((t) =>
          t.id === task.project ? changedProject : t,
        );
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm(`Are you sure about ${task.name} ?`);
    if (conf) {
      setTasks([...tasks].filter((t) => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => {
    setTasks([...tasks].map((t) => (t.id === task.id ? task : t)));
  };

  const handleExpanderClick = (task: Task) => {
    setTasks([...tasks].map((t) => (t.id === task.id ? task : t)));
  };

  return (
    <div className={cnGanttTaskReactAdapterVariants(null, [prefix])}>
      <Gantt
        tasks={tasks}
        viewMode={viewMode}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onExpanderClick={handleExpanderClick}
        TaskListTable={TaskListTable}
        TaskListHeader={TaskListHeader}
        TooltipContent={TooltipContent}
        {...styleOptions}
      />
    </div>
  );
};

export default Variants;
