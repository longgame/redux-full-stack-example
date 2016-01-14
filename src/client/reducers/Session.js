import _ from 'underscore';
import { handleActions } from 'redux-actions';

import {
  REFRESH_SESSION,
} from '../actions/Session';

import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT_SUCCESS
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
  LOGIN_SUCCESS: (state, action) => {
    return _.defaults({
      isAuthenticated: true,
    }, state);
  },
  REGISTER_SUCCESS: (state, action) => {
    return _.defaults({
      isAuthenticated: true,
    }, state);
  },
  LOGOUT_SUCCESS: (state, action) => {
    return schema;
  },
}, schema);
