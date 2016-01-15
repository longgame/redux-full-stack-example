import request from 'axios';

import { createAction } from 'redux-actions';

export const LOGIN_USER = 'LOGIN_USER';
const loginSuccess = createAction(LOGIN_USER);
const loginFailure = createAction(LOGIN_USER);

export function loginUser(email, password) {
  return (dispatch) => {
    request.post('/login', { email, password })
      .then((res) => dispatch(loginSuccess(res.data)))
      .catch((err) => dispatch(loginFailed(err)));
  };
}

export const LOGOUT_USER = 'LOGOUT_USER';
const logoutSuccess = createAction(LOGOUT_USER);
const logoutFailure = createAction(LOGOUT_USER);

export function logoutUser(email, password) {
  return (dispatch) => {
    request.post('/logout')
      .then((res) => dispatch(logoutSuccess(res.data)))
      .catch((err) => dispatch(logoutFailed(err)));
  };
}

export const REGISTER_USER = 'REGISTER_USER';
const registerSuccess = createAction(REGISTER_USER);
const registerFailed = createAction(REGISTER_USER);

export function registerUser(email, password) {
  return (dispatch) => {
    request.post('/register', { email, password })
      .then((res) => dispatch(registerSuccess(res.data)))
      .catch((err) => dispatch(registerFailed(err)));
    dispatch(registerRequest());
  };
}
