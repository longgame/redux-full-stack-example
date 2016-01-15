import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import template from './About.rt';

module.exports = React.createClass({
  render: function() {
    return template.apply(this);
  }
});
