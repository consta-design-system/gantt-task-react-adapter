import './GantTaskReactAdapterFullyExample.css';

import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { Switch } from '@consta/uikit/Switch';
import { useFlag } from '@consta/uikit/useFlag';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import React, { useState } from 'react';

import { TaskListHeader } from '##/components/TaskListHeader';
import { TaskListTable } from '##/components/TaskListTable';
import { TooltipContent } from '##/components/TooltipContent';
import { cn } from '##/utils/bem';

import { data } from '../../../__mock__/mock.data';
import { useGanttTaskReactAdapter } from '../../../useGanttTaskReactAdapter';

const cnGantTaskReactAdapterFullyExample = cn(
  'GantTaskReactAdapterFullyExample',
);

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

const views = [
  ViewMode.Day,
  ViewMode.HalfDay,
  ViewMode.Month,
  ViewMode.QuarterDay,
  ViewMode.Week,
];

export const GantTaskReactAdapterFullyExample = () => {
  const [tasks, setTasks] = useState<Task[]>(data);
  const [showTask, setShowTask] = useFlag(true);
  const [viewMode, setViewMode] = useState<ViewMode>(views[0]);

  const { prefix, ...styleOptions } = useGanttTaskReactAdapter({});

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
    <div className={cnGantTaskReactAdapterFullyExample()}>
      <div className={cnGantTaskReactAdapterFullyExample('Controls')}>
        <Switch
          label="Показывать список задач"
          checked={showTask}
          size="s"
          onChange={setShowTask.toggle}
        />
        <ChoiceGroup
          getItemLabel={(item) => item}
          value={viewMode}
          items={views}
          size="xs"
          view="ghost"
          onChange={setViewMode}
          name="GantTaskReactAdapterFullyExample"
        />
      </div>
      <div className={cnGantTaskReactAdapterFullyExample('Gantt', [prefix])}>
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
          listCellWidth={showTask ? undefined : ''}
          {...styleOptions}
        />
      </div>
    </div>
  );
};
