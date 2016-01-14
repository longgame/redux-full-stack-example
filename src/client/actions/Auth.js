import request from 'axios';

import { createAction } from 'redux-actions';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const loginSuccess = createAction(LOGIN_SUCCESS);

export const LOGIN_FAILED = 'LOGIN_FAILED';
const loginFailed = createAction(LOGIN_FAILED);

export const LOGIN_REQUEST = 'LOGIN_USER';
const loginRequest = createAction(LOGIN_REQUEST);

export const LOGIN_USER = 'LOGIN_USER';
export function loginUser(email, password) {
  return (dispatch) => {
    request.post('/login', { email, password })
      .then((res) => dispatch(loginSuccess(res.data)))
      .catch((err) => dispatch(loginFailed(err)));
    dispatch(loginRequest());
  };
}

export const REGISTER_REQUEST = 'REGISTER_USER';
const registerRequest = createAction(REGISTER_REQUEST);

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const registerSuccess = createAction(REGISTER_SUCCESS);

export const REGISTER_FAILED = 'REGISTER_FAILED';
const registerFailed = createAction(REGISTER_FAILED);

export const REGISTER_USER = 'REGISTER_USER';
export function registerUser(email, password) {
  return (dispatch) => {
    request.post('/register', { email, password })
      .then((res) => dispatch(registerSuccess(res.data)))
      .catch((res) => dispatch(registerFailed(res.data)));
    dispatch(registerRequest());
  };
}
