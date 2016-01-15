import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import iso3166 from 'iso-3166-2';

import Button from '../vitamins/Button';
import Dropdown from '../vitamins/Dropdown';
import Menu from '../vitamins/Menu';
import Item from '../vitamins/Item';
import Flag from '../vitamins/Flag';

module.exports = React.createClass({
  propTypes: {
    country: PropTypes.string
  },
  render: function() {
    var states = iso3166.country(this.props.country || 'us').sub;
    states = _.sortBy(states, (state) => state.name);

    return (
      <Dropdown className='ui search selection dropdown'>
        <input type='hidden' name='state' />
        <i className='dropdown icon' />
        <div className='default text'>Select State</div>
        <Menu>
          {
            _.map(states, (state, code) => {
              return (
                <Item data-value={ code }>
                  { state.name }
                </Item>
              );
            })
          }
        </Menu>
      </Dropdown>
    );
  }
});
