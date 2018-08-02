import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    let applyButton;
    if (this.props.userAppliedTo) {
      applyButton = <button className="Card-button">Applied To</button>;
    } else {
      applyButton = (
        <button onClick={this.props.applyToJob} className="Card-button">
          Apply
        </button>
      );
    }

    return (
      <div className="Card-main">
        <img
          className="Card-image"
          src={this.props.imageUrl}
          alt={this.props.imageUrl}
        />
        <div className="Card-info">
          <small className="Card-title">
            {this.props.cardTitle}
            <b className="Card-company">{' @' + this.props.cardCompany}</b>
          </small>

          <small className="Card-details">{this.props.cardDetails}</small>
        </div>

        {applyButton}
      </div>
    );
  }
}

Card.propTypes = {
  imageUrl: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDetails: PropTypes.string
};
