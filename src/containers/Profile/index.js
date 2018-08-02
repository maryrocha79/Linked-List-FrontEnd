import { connect } from 'react-redux';
import Profile from '../../components/Profile';
import { logout } from '../../store/actions/auth';
import { fetchCurrentUser } from '../../store/actions/currentUser';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser
  };
}

export default connect(
  mapStateToProps,
  { logout, fetchCurrentUser }
)(Profile);
