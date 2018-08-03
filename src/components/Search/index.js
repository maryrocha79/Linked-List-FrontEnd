import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import Card from '../Card';
import CompanyProfilePlaceholder from '../../images/company_placeholder.png';
import './style.css';
import queryString from 'query-string';

export default class Search extends Component {
  state = {
    loading: true
  };
  async componentDidMount() {
    await this.props.fetchCurrentUser();
    await this.props.fetchJobsSearch(
      queryString.parse(this.props.location.search).term
    );
    this.setState({
      loading: false
    });
  }

  handleApply = async jobId => {
    await this.props.createJobApp(jobId);
    await this.props.fetchCurrentUser();
  };

  render() {
    if (this.state.loading) {
      return <h1> Loading... </h1>;
    }
    let displayResults;
    if (this.props.search.length === 0) {
      displayResults = (
        <h3>
          Sorry, this search did not return any matches. Please try again later.
        </h3>
      );
    } else {
      displayResults = this.props.search.map(s => {
        let details = `${s.salary} | ${s.equity}`;
        return (
          <div key={s.id}>
            <Card
              imageUrl={
                this.props.companies[s.company].logo
                  ? this.props.companies[s.company].logo
                  : this.props.companyImg
              }
              cardTitle={s.title}
              cardCompany={s.company}
              cardDetails={details}
              userAppliedTo={this.props.currentUser.applied_to.includes(s.id)}
              applyToJob={() => this.handleApply(s.id)}
            />
          </div>
        );
      });
    }
    return (
      <div>
        <Header history={this.props.history} />
        <div className="feed">
          <h2>
            <i className="fas fa-clipboard-list" /> Search Results:
          </h2>
          <div className="cards">{displayResults}</div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  currentUser: PropTypes.object,
  jobs: PropTypes.array
};

Search.defaultProps = {
  companyImg: CompanyProfilePlaceholder
};
