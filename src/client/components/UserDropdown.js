import React, { Component, PropTypes } from 'react';

import Button from '../vitamins/Button';
import Dropdown from '../vitamins/Dropdown';
import Menu from '../vitamins/Menu';
import Item from '../vitamins/Item';

module.exports = React.createClass({
  propTypes: {
    logoutAction: PropTypes.func.isRequired,
  },
  render: function() {
    const { logoutAction, ...props } = this.props;
    return (
      <Dropdown id='user-widget'>
        <Button>User</Button>
        <Menu id='user-menu'>
          <Item>Profile</Item>
          <Item>Logout</Item>
        </Menu>
      </Dropdown>
    );
  }
});
