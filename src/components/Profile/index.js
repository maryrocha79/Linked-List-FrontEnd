import React, { Component } from 'react';
import Header from '../../containers/Header';
import Card from '../Card';
import './style.css';
import UserProfilePlaceholder from '../../images/user_placeholder.png';

export default class Profile extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }
  render() {
    let employerData;
    if (this.props.currentUser.current_company) {
      employerData = (
        <h3>Employed by: @{this.props.currentUser.current_company}</h3>
      );
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
            <Card
              id="Application-card"
              imageUrl={this.props.currentUser.photo}
              cardTitle={this.props.currentUser.first_name}
              cardCompany={this.props.currentUser.current_company}
              cardDetails={this.props.currentUser.username}
            />
          </div>
        </div>
      </div>
    );
  }
}

Profile.defaultProps = {
  profilePic: UserProfilePlaceholder
};
