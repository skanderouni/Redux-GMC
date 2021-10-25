import { combineReducers } from 'redux';
import { taskReducer } from '../reducer/task';

const rootReducers = combineReducers({ taskReducer });
export default rootReducers;
