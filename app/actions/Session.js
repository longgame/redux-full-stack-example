import request from 'axios';

import { createAction } from 'redux-actions';

export const REFRESH_SESSION = 'REFRESH_SESSION';
const refreshSuccess = createAction(REFRESH_SESSION);
const refreshFailure = createAction(REFRESH_SESSION);

export function refreshSession(email, password) {
  return (dispatch) => {
    request.get('/session')
      .then((res) => dispatch(refreshSuccess(res.data)))
      .catch((err) => dispatch(refreshFailure(err)));
  };
}
