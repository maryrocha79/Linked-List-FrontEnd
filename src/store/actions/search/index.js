import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';

export function fetchJobsSearch(value) {
  return async dispatch => {
    try {
      // tell everyone we're making the request
      dispatch({ type: t.FETCH_JOBS_SEARCH_REQUEST });
      // call the API for /jobs, auth required
      let jobs = await callAPI('get', `/jobs?search=${value}`, true);
      // dispatch the success action creator and the jobs that we got back
      dispatch(fetchJobsSearchSuccess(jobs));
    } catch (error) {
      dispatch(fetchJobsSearchFail(error));
      return Promise.reject();
    }
  };
}

export function fetchJobsSearchSuccess(jobs) {
  return { type: t.FETCH_JOBS_SEARCH_SUCCESS, jobs };
}

export function fetchJobsSearchFail(error) {
  return { type: t.FETCH_JOBS_SEARCH_FAIL, error };
}
