import { connect } from 'react-redux';
import Search from '../../components/Search';
import { fetchJobsRequest, createJobApp } from '../../store/actions/jobs';
import { fetchCompanyRequest } from '../../store/actions/companies';
import { fetchCurrentUser } from '../../store/actions/currentUser';
import { fetchJobsSearch } from '../../store/actions/search';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    displayName: reduxState.currentUser.first_name,
    jobs: reduxState.jobs,
    companies: reduxState.companies,
    search: reduxState.search
  };
}

export default connect(
  mapStateToProps,
  {
    fetchJobsSearch,
    fetchCompanyRequest,
    createJobApp,
    fetchCurrentUser
  }
)(Search);
