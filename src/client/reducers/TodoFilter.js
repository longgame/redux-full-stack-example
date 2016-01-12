import { 
  SET_VISIBILITY_FILTER,
  TodoFilters } from '../actions/TodoList';

export default function todoFilter(state=TodoFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
