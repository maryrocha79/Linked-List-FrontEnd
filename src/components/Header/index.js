import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserProfilePlaceholder from '../../images/user_placeholder.png';
import './style.css';

const DEFAULT_STATE = {
  searchText: '',
  searchCategoryIdx: 0,
  isDropdownVisible: false
};

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = DEFAULT_STATE;
  }

  componentDidMount() {
    this.props.fetchCurrentUser();
  }
  handleSearch = e => {
    e.preventDefault();
    // TODO: search
    console.log(this.props);
    this.props.history.push(`/search?term=${this.state.searchText}`);
    // this.props.history.push(
    //   `/search?${this.state.searchCategoryIdx}=${this.state.searchText}`
    // );
    // this.props.history.push({
    //   pathname: '/search',
    //   search: `?${this.props.searchCategoryIdx}=${this.state.searchText}`
    // });
    // this.history.pushState(
    //   this.props.searchCategoryIdx,
    //   `/search?term=${this.state.searchText}`
    // );
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = idx => {
    this.setState({ searchCategoryIdx: idx });
  };

  handleMenuClick = evt => {
    this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
  };

  render() {
    const { searchText, searchCategoryIdx } = this.state;
    const { searchCategories, displayName, profilePic } = this.props;

    let dropdownMenu;
    if (this.state.isDropdownVisible) {
      dropdownMenu = (
        <div className="dropdown-menu">
          <ul>
            <Link to="/profile">
              <li>User Profile</li>
            </Link>

            <li onClick={this.props.logout}>Logout</li>
          </ul>
        </div>
      );
    } else {
      dropdownMenu = <div />;
    }

    return (
      <div className="Header">
        <Link to="/" className="Header-logo">
          LL
        </Link>
        <form className="search-form" onSubmit={this.handleSearch}>
          <div className="search">
            <span className="fas fa-search" />
            <input
              type="text"
              name="searchText"
              placeholder="Search for Companies, Jobs, or People"
              onChange={this.handleChange}
              value={searchText}
            />
          </div>
          <div className="search-categories">
            {searchCategories.map((category, i) => (
              <div key={category}>
                <input
                  type="radio"
                  id={category}
                  checked={searchCategories[i] === searchCategoryIdx}
                  onChange={() => this.handleClick(searchCategories[i])}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
          <input type="submit" value="Search" className="search-btn" />
        </form>
        <div
          className="header-menu"
          onClick={this.handleMenuClick}
          /** onMouseLeave={this.handleMouseLeave} **/
        >
          <div className="profile-area">
            <img
              src={
                this.props.currentUser.photo
                  ? this.props.currentUser.photo
                  : profilePic
              }
              alt="Profile"
            />
            <span>
              {this.props.currentUser.username
                ? this.props.currentUser.username
                : displayName}
            </span>
          </div>
          {dropdownMenu}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  profilePic: PropTypes.string,
  searchCategories: PropTypes.array
};

Header.defaultProps = {
  searchCategories: ['companies', 'jobs', 'people'],
  profilePic: UserProfilePlaceholder
};
