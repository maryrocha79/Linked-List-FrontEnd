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

    this.setState({
      loading: false
    });
    const values = queryString.parse(this.props.location.search);
    console.log(values);
    await this.props.fetchJobsSearch(values.term);
  }

  handleApply = async jobId => {
    await this.props.createJobApp(jobId);
    await this.props.fetchCurrentUser();
  };

  render() {
    return (
      <div>
        <Header history={this.props.history} />
        Search Page
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
