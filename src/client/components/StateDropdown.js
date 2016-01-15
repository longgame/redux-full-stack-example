import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import iso3166 from 'iso-3166-2';

import Button from '../vitamins/Button';
import Dropdown from '../vitamins/Dropdown';
import Menu from '../vitamins/Menu';
import Item from '../vitamins/Item';
import Flag from '../vitamins/Flag';

module.exports = React.createClass({
  render: function() {
    const { logoutAction, ...props } = this.props;
    return (
      <Dropdown>
        <Button>State</Button>
        <Menu>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
        </Menu>
      </Dropdown>
    );
  }
});
