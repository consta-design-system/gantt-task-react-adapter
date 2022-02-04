import React from 'react'
import { Gantt, Task } from 'gantt-task-react'
import { createMetadata } from '../../__private__/storybook'
import { data } from '../__mock__/mock.data'
import { select } from '@storybook/addon-knobs'
import { ganttTaskReactAdapterPropView, ganttTaskReactAdapterPropViewDefault } from '../types'
import { cn } from '@/__private__/utils/bem'
import { useGanttTaskReactAdapter } from '../useGanttTaskReactAdapter'

import mdx from './GanttTaskReactAdapter.docs.mdx'

import './GanttTaskReactAdapterStories.css'

const defaultKnobs = () => ({
  viewMode: select('viewMode', ganttTaskReactAdapterPropView, ganttTaskReactAdapterPropViewDefault),
})

const getStartEndDateForProject = (tasks: Task[], projectId: string) => {
  const projectTasks = tasks.filter(t => t.project === projectId)
  let start = projectTasks[0].start
  let end = projectTasks[0].end

  projectTasks.forEach(task => {
    if (start.getTime() > task.start.getTime()) {
      start = task.start
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end
    }
  })

  return [start, end]
}

const cnGanttTaskReactAdapterStories = cn('GanttTaskReactAdapterStories')

export const Playground = () => {
  const { viewMode } = defaultKnobs()

  const [tasks, setTasks] = React.useState<Task[]>(data)

  const styleOptions = useGanttTaskReactAdapter({ viewMode })

  const handleTaskChange = (task: Task) => {
    let newTasks = tasks.map(t => (t.id === task.id ? task : t))
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project)
      const project = newTasks[newTasks.findIndex(t => t.id === task.project)]
      if (project.start.getTime() !== start.getTime() || project.end.getTime() !== end.getTime()) {
        const changedProject = { ...project, start, end }
        newTasks = newTasks.map(t => (t.id === task.project ? changedProject : t))
      }
    }
    setTasks(newTasks)
  }

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm('Are you sure about ' + task.name + ' ?')
    if (conf) {
      setTasks(tasks.filter(t => t.id !== task.id))
    }
    return conf
  }

  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)))
  }

  const handleDblClick = (task: Task) => {
    alert('On Double Click event Id:' + task.id)
  }

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)))
  }
  return (
    <div className={cnGanttTaskReactAdapterStories()}>
      <Gantt
        tasks={data}
        viewMode={viewMode}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onExpanderClick={handleExpanderClick}
        {...styleOptions}
      />
    </div>
  )
}

export default createMetadata({
  title: 'Utils|/useGanttTaskReactAdapter',
  id: 'Utils/useGanttTaskReactAdapter',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
