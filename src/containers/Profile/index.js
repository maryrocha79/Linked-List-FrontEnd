import { connect } from 'react-redux';
import Profile from '../../components/Profile';
import { logout } from '../../store/actions/auth';
import { fetchCurrentUser } from '../../store/actions/currentUser';
import { fetchJobsRequest } from '../../store/actions/jobs';
import { fetchCompanyRequest } from '../../store/actions/companies';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    displayName: reduxState.currentUser.first_name,
    jobs: reduxState.jobs,
    companies: reduxState.companies
  };
}

export default connect(
  mapStateToProps,
  { logout, fetchCurrentUser, fetchJobsRequest, fetchCompanyRequest }
)(Profile);
