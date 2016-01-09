import { combineReducers } from 'redux';
import  { counter } from './Counter';
import { todos, todoFilter } from './TodoList';

export default combineReducers({
  counter,
  todos,
  todoFilter,
});
