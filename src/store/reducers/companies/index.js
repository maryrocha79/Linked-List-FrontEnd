import * as t from '../../actions/actionTypes';

// companies:
const DEFAULT_STATE = {};

export default function companiesReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_COMPANY_SUCCESS:
      return { ...state, [action.company.handle]: action.company };
    default:
      return state;
  }
}
