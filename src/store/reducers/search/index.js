import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = [];

export default function jobsSearchReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_JOBS_SEARCH_SUCCESS: {
      console.log(action, '<-action');
      console.log('HIT SEARCH REDUCER');
      // expects an array
      return action.jobs;
    }
    default:
      return state;
  }
}
