import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Card from '../Card';
import CompanyProfilePlaceholder from '../../images/company_placeholder.png';
import './style.css';

export default class Homepage extends Component {
  state = { loading: true };
  async componentDidMount() {
    await this.props.fetchJobsRequest();
    await Promise.all(
      this.props.jobs.map(job => this.props.fetchCompanyRequest(job.company))
    );
    this.setState({
      loading: false
    });
  }

  render() {
    const { jobs } = this.props;
    if (this.state.loading) {
      return <h1> Loading... </h1>;
    }
    let displayJobs;
    if (jobs.length === 0) {
      displayJobs = (
        <h3>Sorry, no jobs are available right now. Please try again later.</h3>
      );
    } else {
      displayJobs = this.props.jobs.map(job => {
        let details = `${job.salary} | ${job.equity}`;
        return (
          <div key={job.id}>
            <Card
              imageUrl={this.props.companies[job.company].logo}
              cardTitle={job.title}
              cardCompany={job.company}
              cardDetails={details}
            />
          </div>
        );
      });
    }

    return (
      <div>
        <Header />
        <div className="feed">
          <h2>
            <i class="fas fa-clipboard-list" /> Jobs
          </h2>
          <div className="cards">{displayJobs}</div>
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  currentUser: PropTypes.object,
  jobs: PropTypes.array
};

Homepage.defaultProps = {
  companyImg: CompanyProfilePlaceholder
};
