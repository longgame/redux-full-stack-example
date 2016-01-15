import React, { Component, PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    glyph: PropTypes.string,
  },
  render: function() {
    const { glyph, ...props } = this.props;
    return (
      <i
        className={ glyph+' flag' }
        { ...props }
        >
      </i>
    );
  }
});
