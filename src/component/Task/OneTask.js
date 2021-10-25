import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../JS/action/task';
const OneTask = ({ tasks }) => {
  const dispach = useDispatch();
  return (
    <div>
      <p>{tasks.description}</p>
      <button>Edit</button>
      <button onClick={() => dispach(deleteTask(tasks.id))}>Delete</button>
      <button>done</button>
    </div>
  );
};

export default OneTask;
