import {
  PING_SERVER,
  PING_SERVER_SUCCESS,
  PING_SERVER_FAILURE } from '../actions/Async';

export function request(state = {}, action) {
  switch (action.type) {
    case PING_SERVER:
      return _.extend(_.clone(state), {
        isFetching: false,
        tsRequest: action.timestamp,
        url: action.url,
        headers: action.headers,
        body: action.body,
        params: action.params,
      });
    case PING_SERVER_SUCCESS:
    case PING_SERVER_FAILURE:
      return _.extend(_.clone(state), {
        isFetching: false,
        tsReceived: action.timestamp,
        status: action.status,
        response: action.response,
      });
    default:
      return state;
  }
}
