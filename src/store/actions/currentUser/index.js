import { callAPI } from '../../../services/api';
import * as t from '../actionTypes';
import jwtDecode from 'jwt-decode';
import { getToken } from '../../../services/token';

export function fetchCurrentUser() {
  return async dispatch => {
    try {
      let token = getToken();
      let username = jwtDecode(token).username;
      if (username) {
        dispatch({ type: t.FETCH_CURRENT_USER_REQUEST });

        let url = '/users/' + username;
        let user = await callAPI('GET', url, true);
        dispatch(fetchUserSuccess(user));
      } else {
        return { type: t.NO_TOKEN_FOUND };
      }
    } catch (error) {
      dispatch(fetchUserFail(error));
    }
  };
}

function fetchUserSuccess(user) {
  return {
    type: t.FETCH_USER_SUCCESS,
    user
  };
}

function fetchUserFail(error) {
  return {
    type: t.FETCH_USER_FAIL,
    error
  };
}
