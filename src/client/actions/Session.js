import request from 'axios';

import { createAction } from 'redux-actions';

export const UPDATE_SESSION = 'UPDATE_SESSION';
const updateSession = createAction(UPDATE_SESSION);

export const REFRESH_SESSION = 'REFRESH_SESSION';
export function refreshSession(email, password) {
  return (dispatch) => {
    request.get('/session')
      .then((res) => dispatch(updateSession(res.data)))
      .catch((err) => dispatch(updateSession(err)));
    dispatch(createAction(REFRESH_SESSION)({ email }));
  };
}
