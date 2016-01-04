export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let nextTodoId = 0;

export const TodoFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    id
  };
};

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
};

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
