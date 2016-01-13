export const PING_SERVER = 'PING_SERVER';
export function pingServer(request) {
  return {
    type: QUERY_SERVER,
    timestamp: Date.now(),
    request
  };
}

export const PING_SERVER_SUCCESS = 'PING_SERVER_SUCCESS';
export function pingServerSuccess(response) {
  type: PING_SERVER_SUCCESS,
  timestamp: Date.now(),
  response
}

export const PING_SERVER_FAILURE = 'PING_SERVER_FAILURE';
export function pingServerFailure(error) {
  type: PING_SERVER_FAILURE,
  timestamp: Date.now(),
  error
}

/*
import request from 'isomorphic-fetch';

export function serverRequest(verb, url, body) {
  return (dispatch) => { 
    dispach(pingServer({}));

    // FIXME: Need to assemble the request correctly
    return request(url)
      .then( (resp) => resp.json() )
      .then( (json) => dispatch(pingServerSuccess(json)) )
      .catch( (err) => dispatch(pingServerFailure(err)) );
  };
}
/**/
