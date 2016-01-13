let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO';
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export const TOGGLE_TODO = 'TOGGLE_TODO';
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const COMPLETE_TODO='COMPLETE_TODO';
export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    id
  };
};

export const REMOVE_TODO = 'REMOVE_TODO';
export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const TodoFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
