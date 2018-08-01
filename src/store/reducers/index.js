import { combineReducers } from 'redux';
import auth from './auth';
import currentUser from './currentUser';
import error from './error';
import jobs from './jobs';
import companies from './companies';

const rootReducer = combineReducers({
  auth,
  currentUser,
  jobs,
  companies,
  error
});

export default rootReducer;
