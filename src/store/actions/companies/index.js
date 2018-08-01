import { callAPI } from '../../../services/api';
import * as t from '../actionTypes';

export function fetchCompanyRequest(handle) {
  return async (dispatch, getState) => {
    // get request for a company
    try {
      dispatch({ type: t.FETCH_COMPANY_REQUEST });
      // console.log(getState().companies);
      // if (getState().companies[handle]) {
      //   console.log(`${handle} already in state!!!`);
      //   return;
      // }
      let url = '/companies/' + handle;
      let company = await callAPI('GET', url, true);
      dispatch(fetchCompanySuccess(company));
    } catch (error) {
      dispatch(fetchCompanyFail(error));
      return Promise.reject();
    }
  };
}

function fetchCompanySuccess(company) {
  return {
    type: t.FETCH_COMPANY_SUCCESS,
    company
  };
}

function fetchCompanyFail(error) {
  return {
    type: t.FETCH_COMPANY_FAIL,
    error
  };
}
