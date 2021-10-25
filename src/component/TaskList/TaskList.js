import React from 'react';
import { useSelector } from 'react-redux';
import OneTask from '../Task/OneTask';
const TaskList = () => {
  const tasks = useSelector((state) => state.taskReducer.tasks);
  return (
    <div>
      {tasks.map((tasks) => (
        <OneTask tasks={tasks} key={tasks.id} />
      ))}
    </div>
  );
};

export default TaskList;
