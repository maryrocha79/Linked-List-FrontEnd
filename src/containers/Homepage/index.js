import { connect } from 'react-redux';
import Homepage from '../../components/Homepage';
import { fetchJobsRequest } from '../../store/actions/jobs';
import { fetchCompanyRequest } from '../../store/actions/companies';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    jobs: reduxState.jobs,
    companies: reduxState.companies
  };
}

export default connect(
  mapStateToProps,
  { fetchJobsRequest, fetchCompanyRequest }
)(Homepage);
