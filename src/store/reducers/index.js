import { combineReducers } from 'redux';
import auth from './auth';
import currentUser from './currentUser';
import error from './error';
import jobs from './jobs';
import companies from './companies';
import search from './search';
const rootReducer = combineReducers({
  auth,
  currentUser,
  jobs,
  companies,
  error,
  search
});

export default rootReducer;
