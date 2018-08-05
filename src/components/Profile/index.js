import React, { Component } from 'react';
import Header from '../../containers/Header';
import Card from '../Card';
import './style.css';
import UserProfilePlaceholder from '../../images/user_placeholder.png';

export default class Profile extends Component {
  state = { loading: true };
  async componentDidMount() {
    await this.props.fetchCurrentUser();
    await this.props.fetchJobsRequest();
    this.setState({
      loading: false
    });
  }
  render() {
    let employerData;
    if (this.props.currentUser.current_company) {
      employerData = (
        <h3>Employed by: @{this.props.currentUser.current_company}</h3>
      );
    }

    // const { jobs } = this.props;
    if (this.state.loading) {
      return <h1> Loading... </h1>;
    }
    let filteredJobs = this.props.jobs.filter(job =>
      this.props.currentUser.applied_to.includes(job.id)
    );
    let displayJobs;
    if (filteredJobs.length === 0) {
      displayJobs = (
        <h3>You have not applied to any jobs yet. Go ahead and apply!</h3>
      );
    } else {
      let filteredJobs = this.props.jobs.filter(job =>
        this.props.currentUser.applied_to.includes(job.id)
      );
      displayJobs = filteredJobs.map(job => {
        let details = `${job.salary} | ${job.equity}`;
        return (
          <div key={job.id}>
            <Card
              imageUrl={
                this.props.companies[job.company].logo
                  ? this.props.companies[job.company].logo
                  : this.props.companyImg
              }
              cardTitle={job.title}
              cardCompany={job.company}
              cardDetails={details}
              userAppliedTo={this.props.currentUser.applied_to.includes(job.id)}
              applyToJob={() => this.handleApply(job.id)}
            />
          </div>
        );
      });
    }
    return (
      <div className="Profile-main">
        <Header />
        <div className="Profile-container">
          <div className="Profile-card">
            <h1>
              {this.props.currentUser.first_name}{' '}
              {this.props.currentUser.last_name}
            </h1>
            <img
              className="Profile-image"
              src={
                this.props.currentUser.photo
                  ? this.props.currentUser.photo
                  : this.props.profilePic
              }
              alt={this.props.currentUser.photo}
            />
            {employerData}
          </div>
          <div className="feed">
            <h2>
              <i className="fas fa-clipboard-list" /> Applications
            </h2>
            {displayJobs}
          </div>
        </div>
      </div>
    );
  }
}

Profile.defaultProps = {
  profilePic: UserProfilePlaceholder
};
