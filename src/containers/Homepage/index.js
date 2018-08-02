import { connect } from 'react-redux';
import Homepage from '../../components/Homepage';
import { fetchJobsRequest, createJobApp } from '../../store/actions/jobs';
import { fetchCompanyRequest } from '../../store/actions/companies';
import { fetchCurrentUser } from '../../store/actions/currentUser';

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
  { fetchJobsRequest, fetchCompanyRequest, createJobApp, fetchCurrentUser }
)(Homepage);
