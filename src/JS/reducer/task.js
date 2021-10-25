//insitialState

import { ADD_TASK, DELETE_TASK } from '../constant/task';

const initialState = {
  tasks: [
    { id: Math.random(), description: 'first task', isDone: false },
    { id: Math.random(), description: 'second task', isDone: false },
    { id: Math.random(), description: 'third task', isDone: false },
    { id: Math.random(), description: 'fourth task', isDone: false },
  ],
};

//pure function
export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};

//export
