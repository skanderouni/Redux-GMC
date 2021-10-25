import { ADD_TASK, DELETE_TASK } from '../constant/task';

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};
export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
