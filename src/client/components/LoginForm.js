import React, { Component, PropTypes } from 'react';

import template from './LoginForm.rt';

module.exports = React.createClass({
  propTypes: {
    onSubmit: PropTypes.func.isRequired,
  },
  render: function() {
    return template.apply(this);
  }
});
