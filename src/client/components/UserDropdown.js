import React, { Component, PropTypes } from 'react';

import Button from '../vitamins/Button';
import Divider from '../vitamins/Divider';
import Dropdown from '../vitamins/Dropdown';
import Menu from '../vitamins/Menu';
import Item from '../vitamins/Item';
import Icon from '../vitamins/Icon';

module.exports = React.createClass({
  propTypes: {
    logoutAction: PropTypes.func.isRequired,
  },
  render: function() {
    const { logoutAction, ...props } = this.props;
    return (
      <Dropdown id='user-widget'>
        <Icon className='big inverted user icon' />
        <Menu id='user-menu'>
          <Item>Profile</Item>
          <Divider />
          <Button
            onClick={ logoutAction }
            >
            Logout
          </Button>
        </Menu>
      </Dropdown>
    );
  }
});
