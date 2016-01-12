import { combineReducers } from 'redux';

import counter from './Counter';
import todoFilter from './TodoFilter';
import todos from './TodoList';
import dimmer from './Dimmer';

export default combineReducers({
  counter,
  todos,
  todoFilter,
  dimmer,
});
