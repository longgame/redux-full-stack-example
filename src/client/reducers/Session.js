import _ from 'underscore';
import { handleActions } from 'redux-actions';

import {
  UPDATE_SESSION,
} from '../actions/Session';

import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER
} from '../actions/Auth';

const schema = {
  isAuthenticated: false,
  summary: {}
};

export default handleActions({
  UPDATE_SESSION: (state, action) => {
    return _.defaults({
      summary: action.payload
    }, state);
  },
  LOGIN_USER: (state, action) => {
    return _.defaults({
      isAuthenticated: true,
    }, state);
  },
  REGISTER_USER: (state, action) => {
    return _.defaults({
      isAuthenticated: true,
    }, state);
  },
  LOGOUT_USER: (state, action) => {
    return schema;
  },
}, schema);
