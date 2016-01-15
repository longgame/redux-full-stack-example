import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import template from './Footer.rt';
import styles from './Footer.scss';

module.exports = React.createClass({
  render: function() {
    return template.apply(this);
  }
});
