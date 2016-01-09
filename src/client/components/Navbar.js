import React, { Component, PropTypes } from 'react';

import template from './Navbar.rt';

module.exports = React.createClass({
  propTypes: {
    links: PropTypes.arrayOf({
      title: PropTypes.string,
      href: PropTypes.string,
    }),
  },
  render: template
});
